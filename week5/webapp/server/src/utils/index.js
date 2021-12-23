const handleHTTPError = (error, next) => next(error);

class HTTPError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = {
  handleHTTPError,
  HTTPError,
}