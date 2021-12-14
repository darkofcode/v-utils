class ErrorRespond extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorRespond;
export { ErrorRespond };
