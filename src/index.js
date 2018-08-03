const Reel = require('./reel')

module.exports.Reel = Reel;
module.exports = (options) => {
    return new Reel(options);
}