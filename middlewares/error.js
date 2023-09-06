export const errorHandler = (err, req, res, next) => {
  err.message = err.message || "Invalid Internal Error";
  return res.status(404).json({
    success: false,
    message: err.message,
  });
};
