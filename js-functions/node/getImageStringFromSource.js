/**
 *
 * @param {string} src ;
 * @returns {Promise<string>}
 * @example
 * const imgData = await getImageStringFromSource('http:abc')
 */
const getImageStringFromSource = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.height = img.naturalHeight;
      canvas.width = img.naturalWidth;
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = (err) => {
      reject(err);
    };

    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = src;
    }
  });
};

export default getImageStringFromSource;
export { getImageStringFromSource };
