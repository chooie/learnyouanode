module.exports = function(dirName, extension, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dirName, function(err, data) {
    if (err) {
      return callback(err);
    }
    var filteredArr = [];
    data.forEach(function(elem) {
      if (path.extname(elem) === '.' + extension) {
        filteredArr.push(elem);
      }
    });
    callback(err, filteredArr);
  });
};
