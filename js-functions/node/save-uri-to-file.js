import { dataURItoBlob } from "./data-uri-to-blob";
import { saveBuffer } from "./save-buffer";
/**
 *
 * @param {string} dataUrl
 * @param {string} filePath
 * @return Promise
 */
const saveUrlToFile = (dataUrl, filePath) => {
  const buffer = dataURItoBlob(dataUrl);
  return saveBuffer(buffer, filePath);
};

export { saveUrlToFile };
