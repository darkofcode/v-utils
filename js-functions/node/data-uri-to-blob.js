import { isDataUrl } from "./is-data-uri";
import { getMimeType } from "./get-mimetype-from-uri";

/**
 * @param {string} dataURI
 * @return {Blob} || null, if not datauri
 */

function dataURItoBlob(dataURI) {
  if (!isDataUrl(dataURI)) {
    return null;
  }

  let byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  let mimeString = getMimeType(dataURI);

  // write the bytes of the string to an ArrayBuffer
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  //Old Code
  //write the ArrayBuffer to a blob, and you're done
  //var bb = new BlobBuilder();
  //bb.append(ab);
  //return bb.getBlob(mimeString);

  //New Code
  try {
    return new Blob([ia], { type: mimeString });
  } catch (error) {
    // The BlobBuilder API has been deprecated in favour of Blob, but older
    // browsers don't know about the Blob constructor
    // IE10 also supports BlobBuilder, but since the `Blob` constructor
    // also works, there's no need to add `MSBlobBuilder`.
    var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder;
    var bb = new BlobBuilder();
    bb.append(ia.buffer);
    return bb.getBlob(mimeString);
  }
}

export { dataURItoBlob };
