import {upload} from './storage';

// Thx Lighthouse viewer drag-and-drop.js
function setupDragAndDrop() {
  let dragging = false;

  // Setup drag n drop
  const dropArea = document.querySelector('body');
  dropArea.addEventListener('dragover', event => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
  });

  dropArea.addEventListener('drop', event => {
    event.stopPropagation();
    event.preventDefault();
    resetDraggingUI();
    const fileList = event.dataTransfer.files;
    handleDrop(fileList);
  });

  // The mouseleave event is more reliable than dragleave when the user drops
  // the file outside the window.
  dropArea.addEventListener('mouseleave', _ => {
    if (!dragging) return;
    resetDraggingUI();
  });
  dropArea.addEventListener('dragenter', _ => {
    dropArea.classList.add('dropping');
    dragging = true;
  });

  function resetDraggingUI() {
    dropArea.classList.remove('dropping');
    dragging = false;
  }
}

/**
 * @param {FileList} fileList
 */
function handleDrop(fileList) {
  if (fileList.length === 0) return;
  if (fileList.length !== 1) {
    throw console.error('Can only upload 1 trace at a time');
  }
  // TODO: support .json.gz
  const fileItem = fileList.item(0);
  // I see .json.gz as  "application/x-gzip"
  if (!fileItem.type.endsWith('/json') && !fileItem.type.endsWith('gzip')) {
    throw console.error('Only .json and .json.gz is accepted');
  }
  upload(fileItem);
}

export {
  setupDragAndDrop, 
  handleDrop,
};
