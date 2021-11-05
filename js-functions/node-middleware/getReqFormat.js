export function getUrl(req) {
  return req.originalUrl || req.url;
}
export function getMethod(req) {
  return req.method;
}

export function getHttpVersion(req) {
  return req.httpVersionMajor + "." + req.httpVersionMinor;
}
export function getUserAgent(req) {
  return req.headers["user-agent"];
}
export const getErrorMessage = (err) => {
  return err.message || "Unknown Error!";
};

export const getErrorCode = (err) => {
  const statusCode = +(err.status || err.code || err.statusCode || "");
  return !!statusCode ? statusCode : 500;
};
