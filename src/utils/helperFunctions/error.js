// @Generic Error Class
exports.newError = class newError extends Error {
  constructor({ code }) {
    super();
    this.code = code;
    this.date = new Date().now();
  }
};

exports.errorResponse = ({ res, code, message }) => {
  console.log(`Error Response ::: ${message}`)
  return res.status(code).json({
    status: {
      code,
      success: false,
    },
    response: {
      message,
      data: {}
    },
  });
};

exports.returnError = error => {
  console.log(error);
  return {
    success: false,
    error,
  };
};

exports.errorDB = message => {
  const error = new Error();
  error.code = 'DB_OPERATION_FAILED';
  error.message = message;
  error.date = new Date();
  return error;
};