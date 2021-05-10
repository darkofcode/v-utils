/**
 *
 * @param {any} canvas
 * @param {number} sizeLimitInKB
 */

const toImageUrl = (canvas, sizeLimitInKB) => {
  if (!canvas) {
    return "";
  }
  let imgUrl = "";
  const sizeInBite = sizeLimitInKB * 1000;
  const compressors = [
    1,
    0.95,
    0.9,
    0.85,
    0.8,
    0.75,
    0.7,
    0.65,
    0.6,
    0.55,
    0.5,
    0.45,
    0.4,
    0.35,
    0.3,
    0.25,
    0.2,
    0.15,
    0.1,
  ];
  // console.log(`from compressor`, sizeInBite);
  for (let i = 0; i < compressors.length; i++) {
    let com = compressors[i];
    imgUrl = canvas.toDataURL("image/png", com);
    if (imgUrl.length <= sizeInBite) {
      return imgUrl;
    }
  }
  return imgUrl;
};

export { toImageUrl };
