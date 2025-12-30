# Review Findings

## 1. The "XY Problem" & Architecture
**Why does this exist?**
You are building a wrapper around Perfetto and DevTools Trace Viewer to provide "easy sharing" and "persistence".
- **The Good**: It solves the "how do I share this 50MB JSON file with my coworker" problem effectively.
- **The Bad**: You are maintaining a delicate "glue" layer that scrapes/iframes other complex apps. This is high maintenance.
- **The Risk**: If Perfetto or Chrome DevTools changes their URL structure or message passing protocol (which they do often), your app breaks. The `chromiumHashVer` constant in `app.js` proves this fragility.

**Recommendation**:
Instead of a fragile iframe wrapper that tries to "control" the child (polling for load, injecting messages), consider contributing to the upstream projects (Perfetto) to support the features you need (e.g., better cloud storage integration) or use their official deep-linking APIs more robustly. If you *must* wrap, treat the child as a black box as much as possible.

## 2. Holistic Review & Code Quality

### Global Namespace Pollution
`globalThis.$`, `globalThis.traceAssetUrl`, `globalThis.traceTitle` are everywhere.
- **Why it's bad**: It makes the code hard to test, hard to follow, and prone to collisions.
- **Fix**: Import modules explicitly. Create a `State` object or store.

### "jQuery-ism" in 2025
The `$` helper in `src/app.js` is unnecessary overhead.
- **Why it's bad**: It adds a non-standard abstraction for something native APIs handle well.
- **Fix**: Use `document.querySelector` directly or alias it locally within modules if you really must, but don't hang it on `globalThis`.

### State Management
Your state is scattered across:
1. DOM classes (`state--viewing`, `visible`)
2. Global variables (`traceAssetUrl`)
3. URL parameters
- **Why it's bad**: It's impossible to reason about the app's state at any given point.
- **Fix**: Centralize state. Even a simple object `const appState = { currentTrace: null, view: 'landing' }` with a render function would be miles better.

### Iframe Communication
`setInterval` polling in `showTraceInPerfetto` is a hack.
- **Why it's bad**: It wastes cycles and is timing-dependent.
- **Fix**: Use a proper handshake. Wait for the iframe to post a `READY` message (if supported) or use `onload` as a *trigger* to start the handshake, not a `setInterval`.

## 3. Security & Performance

### Security
- **`innerHTML` / `src` assignments**: You are assigning `iframe.src` based on `assetUrl` which comes from `getAssetUrl`. While `getAssetUrl` seems to validate against Firebase storage, `readParams` parses URLs somewhat loosely.
- **Firebase Config**: Your API keys are in `src/storage.js`. This is generally "okay" for Firebase (client-side keys are public), but ensure your Security Rules (`storage.rules`) are tight.
- **Storage Rules**:
    ```
    allow create: if resource == null // it doesnt already exist
    ```
    This is good (prevent overwrites), but you allow *anyone* to upload anything to `traces/{traceId}`. A malicious actor could fill your bucket. You should consider adding:
    - File size limits (via `request.resource.size`).
    - Content type validation (already somewhat there, but enforce it in rules).
    - Rate limiting or auth (even anonymous auth) to prevent abuse.

### Performance
- **"REST adds ~300ms latency"**: You claim this in comments. Have you benchmarked this recently? The Firebase SDK handles connection reuse, auth token refreshing, and edge caching. Your manual fetch might actually be *slower* for repeat users or fail to handle edge cases (like token expiry) that the SDK handles.
- **Magic Waits**: `setTimeout(..., 1500)` to close the dialog. If the network is slow, the user sees the trace before it's ready, or the dialog closes while it's still loading.

## 4. Modernization

### `Promise.withResolvers`
You are using `Promise.withResolvers()` in `src/storage.js`.
- **Status**: This is ES2024.
- **Risk**: Support might be spotty depending on your target audience (e.g., older corporate laptops).
- **Fix**: Ensure your build process (Rollup) polyfills this or transpile it down if you care about < 2024 browsers.

## 5. Proposed Refactor

**Goal**: Isolate logic, remove globals, and make state explicit.

### Step 1: `StateManager`
Create a simple store to hold the application state.
```javascript
class AppState {
    constructor() {
        this.traceUrl = null;
        this.traceMetadata = null;
        this.view = 'landing'; // 'landing', 'viewing', 'error'
    }
    setTrace(url, metadata) { ... }
    reset() { ... }
}
```

### Step 2: `ViewerAdapter` Interface
Abstract the difference between Perfetto and DevTools behind an interface.
```javascript
class TraceViewer {
    load(traceUrl) { ... }
    show() { ... }
    hide() { ... }
}

class PerfettoViewer extends TraceViewer { ... }
class DevToolsViewer extends TraceViewer { ... }
```

### Step 3: Remove `globalThis`
Pass dependencies (State, Viewer) to functions instead of relying on globals.

### Step 4: Robust Uploads
Switch back to the Firebase SDK for metadata retrieval unless you have a hard benchmark proving the 300ms hit is critical. If you stick to REST, handle errors more robustly than just `console.error`.

### Step 5: Build System
Your `rollup.config.js` inlines everything. This is fine for a small tool, but consider splitting the "heavy" viewer logic from the "landing" logic so the initial load is instant.
