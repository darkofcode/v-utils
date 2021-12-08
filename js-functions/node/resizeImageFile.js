import { getImageElementFromFile } from "./getImgElementFromFile";
import { resizeCroppedImage } from "./resize-cropped-image";
/**
 *
 * @param {File} imgFile
 * @param {number} fileSizeInKb
 * @param {"png"|"jpeg"} fileType
 * @returns {Promise<Blob>}
 */
export const getResizeImageFile = async (imgFile, fileSizeInKb = 500, fileType) => {
  const imgElm = await getImageElementFromFile(imgFile);
  return resizeCroppedImage(imgElm, {}, fileSizeInKb, fileType);
};
