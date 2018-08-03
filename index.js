const Reel = require('./src/reel')

module.exports.Reel = Reel;
module.exports = (options) => {
    return new Reel(options);
}