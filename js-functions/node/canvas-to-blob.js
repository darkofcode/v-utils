import { dataURItoBlob } from "./data-uri-to-blob";

const getBlobFromCanvas = (canvas, sizeLimitInKB) => {
  // const height = canvas.height;
  // const width = canvas.width;
  // const scaleHeight = height / 500;
  // const newWidth = parseInt(width / scaleHeight);

  // canvas.height = 500;
  // canvas.width = newWidth;
  // console.log(`from `, { height, width, scaleHeight, newWidth, canvas });
  // // const uri = getCanvasToUri(canvas, sizeLimitInKB);
  // // return toBlob(uri);
  const uri = canvas.toDataURL("image/png", 1);
  return dataURItoBlob(uri);
};

export { getBlobFromCanvas };
