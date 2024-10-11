# trace.cafe - easy webperf trace sharing

## https://trace.cafe/

<a href="https://user-images.githubusercontent.com/39191/211872166-607f1b69-c701-4ebb-a117-0d1e13ce96c2.png"><img alt="trace.cafe while uploading a trace" src="https://user-images.githubusercontent.com/39191/211872166-607f1b69-c701-4ebb-a117-0d1e13ce96c2.png" height=278></a><a href="https://user-images.githubusercontent.com/39191/211873162-97abd2b3-1916-4f39-bd42-06f6e4a16f8e.png"><img alt="trace.cafe viewing a trace" src="https://user-images.githubusercontent.com/39191/211873162-97abd2b3-1916-4f39-bd42-06f6e4a16f8e.png" height=278></a>


Biggups to the team behind https://profiler.firefox.com/ who've enabled Firefox folks to do this for years.

And shoutout to Artem (and me, lol), who worked on this project's predecessor: https://chromedevtools.github.io/timeline-viewer/

## Development

Probably `npm install -g firebase-tools`

```sh
firebase use tum # optional

yarn watch # or yarn build

yarn serve
```

```sh
yarn bump # to update to latest frontend version
```

```sh
# deploying
yarn deploy
```

## TODO

- motion grpahics animation on drop?
- navigation transition API?
- create nanoid as hash of content. (I experimented with https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string but it gives a ~40 char string. and i'm too lazy to find a determinisitic hashing nanoid thing that will stay short.)
