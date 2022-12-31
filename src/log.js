
export function hijackConsole(){
  const textarea = document.querySelector('textarea');
  const detailsSummaryItem = document.querySelector('details summary span');

  const origConsole = globalThis.console;
  for (const method of 'log warn error'.split(' ')) {
    const handler = {
      apply: function(target, thisArg, argumentsList) {
        const logText = argumentsList.map(arg => {
          return typeof arg === 'string' ? arg : JSON.stringify(arg)
        }).join('\t');
        const logLine = `[${method.padStart(5)}] ${logText}`;
        textarea.textContent += `\n${logLine}`;
        textarea.scrollTop = textarea.scrollHeight;

        detailsSummaryItem.textContent = `${logText}`
        return target(...argumentsList);
      }
    };
    const proxyConsoleFn = new Proxy(origConsole[method], handler);
    window.console[method] = proxyConsoleFn;
  }
}
