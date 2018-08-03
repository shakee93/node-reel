var cron = require('node-cron');

module.exports = function (data) {
    return cron.schedule(data.expression, data.callback)
}