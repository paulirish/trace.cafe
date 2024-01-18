import {upload} from './storage';

// Thx Lighthouse viewer drag-and-drop.js
function setupDragAndDrop() {
  let dragging = false;

  // Setup drag n drop
  const dropArea = $('body');
  dropArea.addEventListener('dragover', event => {
    event.stopPropagation();
    event.preventDefault();

    if (event.dataTransfer?.types?.includes('Files')) {
      // Style the drag-and-drop as a "copy file" operation.
      event.dataTransfer.dropEffect = 'copy';
    } else {
      // someone dragged text by mistake or something.
      resetDraggingUI();
    }
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
    // Don't trigger if someone (me) accidentally drags the demo link.
    if (event.dataTransfer?.types?.includes('Files')) {
      dropArea.classList.add('dropping');
      dragging = true;
    }
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
  const fileItem = fileList.item(0);
  console.log('Received file: ', fileItem.name);
  upload(fileItem);
}

export {
  setupDragAndDrop,
  handleDrop,
};
