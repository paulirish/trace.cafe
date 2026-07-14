/**
 * Creates and chains a multi-step progress dialog.
 * @param {string[]} steps
 * @param {number} [animationDuration=1000]
 * @returns {{dialog: HTMLDialogElement}}
 */
export function createProgressDialog(steps, animationDuration = 1000) {
  const dialog = document.createElement('dialog');
  dialog.id = 'progress-dialog';
  dialog.style.cssText = `
    color-scheme: light dark;
    inset: 0.5rem;
    margin: auto;
    position: fixed;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: light-dark(#efefec, #333b3c);
    color: light-dark(#333b3c, #efefec);
    border-radius: 8px;
    z-index: 1000;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  /**
   * @param {string} labelText
   * @returns {{container: HTMLDivElement, progress: HTMLProgressElement}}
   */
  function createProgressItem(labelText) {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-align: right;
    `;
    const label = document.createElement('label');
    label.textContent = labelText;
    label.style.width = '150px';

    const progress = document.createElement('progress');
    progress.value = 0;
    progress.max = 100;
    progress.style.width = '150px';

    container.appendChild(label);
    container.appendChild(progress);
    dialog.appendChild(container);
    return {container, progress};
  }

  /**
   * @param {HTMLProgressElement} progressEl
   * @returns {Promise<void>}
   */
  function animateProgress(progressEl) {
    return new Promise(resolve => {
      const startTime = performance.now();
      function frame() {
        const progressPct = Math.min((performance.now() - startTime) / animationDuration, 1);
        progressEl.value = progressPct * 100;
        if (progressPct < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve(void 0);
        }
      }
      requestAnimationFrame(frame);
    });
  }

  const items = steps.map(step => createProgressItem(step));

  // Chain the animations sequentially
  let chain = Promise.resolve();
  for (const item of items) {
    chain = chain.then(() => animateProgress(item.progress));
  }

  return {dialog};
}
