import { dataURItoBlob } from "./data-uri-to-blob";
import { isEmpty } from "../object/is-empty";

/**
 *
 * @param {HTMLImageElement} image
 * @param {{width:number,height:number,x:number,y:number}} crop
 * @param {number} sizeLimitInKb
 * @param {"png"|"jpeg"} imgType
 * @returns
 * @default {crop:{x:0,y:0},sizeLimitInKb:500,imgType:"png"}
 *
 */
const resizeCroppedImage = (image, crop = {}, sizeLimitInKb = 500, imgType = "png") => {
  if (!image) return;
  if (isEmpty(crop)) {
    crop = {
      width: image.width,
      height: image.height,
      x: 0,
      y: 0,
    };
  }
  const imageType = imgType === "png" ? "image/png" : "image/jpeg";
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  let sizeRatio = imageType.toLocaleLowerCase().includes("png") ? 4 : 0.93;
  sizeRatio = sizeRatio * (3 / 4) * (1 / 1024); // 3/4 string64 to bite * 1/1024 (to kb)
  const newWidth = crop.width * scaleX;
  const newHeight = crop.height * scaleY;
  // const originalImageSize = image.naturalWidth * image.naturalHeight * sizeRatio; // in kb
  const newImageSize = newWidth * newHeight * sizeRatio; // in kb

  const ratio = newImageSize <= sizeLimitInKb ? 1 : (sizeLimitInKb / newImageSize) ** 0.5;

  canvas.width = newWidth * ratio;
  canvas.height = newHeight * ratio;

  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width * scaleX * ratio,
    crop.height * scaleY * ratio
  );

  const uri = canvas.toDataURL(imageType);
  return dataURItoBlob(uri);
};

export { resizeCroppedImage };
