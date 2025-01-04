const { authentication } = require('./authentication.middleware');
const { dataLogger } = require('./dataLogger.middleware');
const { requestValidator } = require('./requestValidator.middleware');
const { errorHandler } = require('./errorHandler.middleware');

module.exports = {
    authentication,
    dataLogger,
    requestValidator,
    errorHandler,
};
