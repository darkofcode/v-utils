/**
 *
 * @param {string} uri
 * @return boolean
 */
const isDataUrl = (uri) => {
  if (!/^data:/i.test(uri)) {
    // throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    return false;
  }

  // strip newlines
  uri = uri.replace(/\r?\n/g, "");

  // split the URI up into the "metadata" and the "data" portions
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    // throw new TypeError("malformed data: URI");
    return false;
  }
  return true;
};

export { isDataUrl };
