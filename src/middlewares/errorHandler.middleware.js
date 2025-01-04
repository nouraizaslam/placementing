exports.errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    status: {
      code: 500,
      success: false,
    },
    response: {
      message: "Server Side Error!",
      error: err.message ? err.message : err,
    },
  });
};
