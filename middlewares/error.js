class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err, req, res, next) => {
  err.message = err.message || "Invalid Internal Error";
  err.statusCode = err.message || "Invalid Internal Error";

  return res.status(404).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
