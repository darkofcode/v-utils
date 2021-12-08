/**
 *
 * @param {File|Blob} blob ex:image file from onchange input
 * @returns {Promise<string>}
 */
const blobToDataUri = (blob) => {
  // console.log(`from blob to uri`, blob);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
      // console.log(base64data);
      resolve(base64data);
    };
  });
};

export { blobToDataUri };
