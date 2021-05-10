// data:[<mediatype>][;base64],<data>
// The mediatype is a MIME type string, such as 'image/jpeg' for a JPEG image file.
// If omitted, defaults to text/plain;charset=US-ASCII
/**
 *
 * @param {string} dataURI
 * @return  string
 */
const getMimeType = (dataURI) => {
  return dataURI.split(",")[0].split(":")[1].split(";")[0] || "text/plain";
};

export { getMimeType };
