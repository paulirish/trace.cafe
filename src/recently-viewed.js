
/** @typedef {import('firebase/storage').FullMetadata} FullMetadata */

const wait = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));
const fmter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  

// Object literals as singletons are underappreciated. 
const recentlyViewed = {
  /**
   * 
  * @param {FullMetadata} fileData
  * @param {string} filename
   */
  add: async (fileData, filename) => {
    // async because this shouldn't be in critical path
    await wait();
    const recent = recentlyViewed.get()
    if (fileData.name.startsWith('permatraces')) return; // demo doesnt count
    const traceId = fileData.name.replace('traces/', '');

    recent[traceId] = {fileData, filename};
    localStorage.setItem('recent', JSON.stringify(recent));
  },

  get: _ => {
    try {
      return JSON.parse(localStorage.getItem('recent') ?? '{}');
    } catch(e) {
      return {};
    }
  },

  listAsDOM: _ => {
    const frag = document.createDocumentFragment();
    const today = new Date();

    const entries = Object.entries(recentlyViewed.get());
    if (!entries.length) return frag;

    const header = frag.appendChild(document.createElement('h2'));
    header.textContent = 'Recently viewed';
    header.title = 'The last 50 traces you\'ve viewed. (Starting April 2024). Sorted by upload timestamp, descending'; 
    const list = frag.appendChild(document.createElement('ul'));
    list.classList.add('recent');

    // sort by trace age, NOT by viewing timestmap. maybe confusing but.. this means they dont jump position as much.
    entries.sort((a, b) => b[1].fileData.generation - a[1].fileData.generation);

    for (const [traceid, data] of entries.slice(0, 50)) {
      const entryDate = new Date(data.fileData.timeCreated);
      // If the data is more than a year old, the trace wont load anyway, so skip.
      const daysDiff = (today.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24);
      if (daysDiff >= 365) continue;

      const link = list.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
      link.href = `/t/${traceid}`;
      const dateEl = link.appendChild(document.createElement('span'));

      dateEl.textContent = recentlyViewed.formatDate(entryDate);
      link.append(` ${data.filename}`);
    }
    return frag;
  },

  formatDate: date => {
    // TODO: instead, maybe use https://github.com/paulirish/dates-temporal-relativetimeformat-play for a timeago string
    const timeStr = date.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute:'2-digit'});
    const dateParts = date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/');
    dateParts.unshift(dateParts.pop());
    const dateStr = dateParts.join('-');
    return `${dateStr} ${timeStr}`;
  }
};


export {recentlyViewed};
