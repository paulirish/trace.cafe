import { upload } from "./app";

export function setupDragAndDrop() {


  // Setup drag n drop
  const dropArea = document.querySelector('body');
  dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
  });
  dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    handleDrop(fileList);
  });

}


/**
 * @param {FileList} fileList 
 */
function handleDrop(fileList) {
  if (fileList.length !== 1) {
    throw new Error('Can only upload 1 trace at a time');
  }
  // TODO: support .json.gz
  const fileItem = fileList.item(0);
  if (!fileItem.type.endsWith('/json')) {
    throw new Error('Only JSON is accepted');
  }
  upload(fileItem);
}