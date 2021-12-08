import { blobToDataUri } from "./blob-to-data-uri-64base";

/**
 *
 * @param {File} imgFile
 * @returns {Promise<HTMLImageElement>}
 */
export const getImageElementFromFile = async (imgFile) => {
  const dataUrl = await blobToDataUri(imgFile);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = dataUrl;
  });
};
