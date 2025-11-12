// Thx Lighthouse viewer drag-and-drop.js
function setupDragAndDrop(callback) {
  let dragCounter = 0;

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
    dragCounter = 0;
    resetDraggingUI();
    const fileList = event.dataTransfer?.files;
    callback(fileList);
  });

  dropArea.addEventListener('dragenter', event => {
    // Don't trigger if someone (me) accidentally drags the demo link.
    if (event.dataTransfer?.types?.includes('Files')) {
      if (dragCounter === 0) {
        dropArea.classList.add('dropping');
      }
      dragCounter++;
    }
  });

  dropArea.addEventListener('dragleave', () => {
    dragCounter--;
    if (dragCounter === 0) {
      resetDraggingUI();
    }
  });

  function resetDraggingUI() {
    dropArea.classList.remove('dropping');
  }

}

export {
  setupDragAndDrop,
};
