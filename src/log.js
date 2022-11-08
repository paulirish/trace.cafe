
export function hijackConsole(){
  const textarea = document.querySelector('textarea');

  const origConsole = globalThis.console;
  for (const method of 'log warn error'.split(' ')) {
    const handler = {
      apply: function(target, thisArg, argumentsList) {
        const logLine = `[${method.padStart(5)}] ${argumentsList.map(JSON.stringify).join('\t')}`;
        textarea.textContent += `\n${logLine}`;
        textarea.scrollTop = textarea.scrollHeight;
        return target(...argumentsList);
      }
    };
    const proxyConsoleFn = new Proxy(origConsole[method], handler);
    window.console[method] = proxyConsoleFn;
  }
}
