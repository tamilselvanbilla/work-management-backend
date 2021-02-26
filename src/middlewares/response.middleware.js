const logger = require('./logger.middleware');

var successRes = function successValue(res, results, message) {
    return res.status(200).send({ status: 200, results: results, message: message });
};


// Log maintained for all errors
var errorRes = function errorValue(res, error, message, controller) {
    logger.log('error', error, message, controller);
    if (error.code == 11000) {
        message = "Duplicate records found!"
    }
    return res.status(400).send({ status: 400, error: error, message: message });
};

module.exports = { successRes, errorRes };