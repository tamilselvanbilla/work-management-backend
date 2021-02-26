var log4js = require("log4js");

exports.log = function (level, error, message, file) {
    var date = new Date();
    var fileName = (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()).toString();

    log4js.configure({
        appenders: { LiveStream: { type: 'file', filename: 'logs/' + fileName + '.log' } },
        categories: { default: { appenders: ['LiveStream'], level: level } }
    });
    var logger = log4js.getLogger('LiveStream');
    if (level === 'error') {
        logger.error(file, error)
    }
}