module.exports = (function () {
  Object.prototype.map = function (callback) {
    return Object.entries(this).map(entryArray => callback(entryArray[0], entryArray[1]));
  };
}());
