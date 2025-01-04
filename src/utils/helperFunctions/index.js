const { successResponse } = require('./success');
const { errorDB, errorResponse, returnError } = require('./error');
const { APIResponse } = require('./APIResponse');
const { pagination } = require('./pagination');

module.exports = {
    APIResponse,
    pagination,
    // ----------------------
    successResponse,
    errorDB,
    errorResponse,
    returnError,

};
