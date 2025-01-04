// const { randomConstant, errorCode } = require("../constants");

// const { INTERNAL_JWT_SECRET } = randomConstant;
// const { AUTHENTICATION_TOKEN_NOT_FOUND, INTERNAL_AUTHENTICATION_ERROR } =
//   errorCode;

exports.authentication = (req, res, next) => {
  try {
    // const apiKey = req.headers['x-api-key'];
    // if (typeof authenticationHeader !== 'undefined') {
    //   const token = authenticationHeader.split(' ')[1];
    //   if (token === INTERNAL_JWT_SECRET) {
    //     console.log(`Internal Request: Authenticated.`);
    //     next();
    //   } else {
    //     let error = new Error();
    //     error.code = INTERNAL_AUTHENTICATION_ERROR;
    //     throw error;
    //   }
    // } else {
    //   let error = new Error();
    //   error.code = AUTHENTICATION_TOKEN_NOT_FOUND;
    //   throw error;
    // }
    next();
  } catch (e) {
    next(e);
  }
};
