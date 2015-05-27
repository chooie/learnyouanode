var ls = require('./lsFilter');

var fileName = process.argv[2],
  extension = process.argv[3];

ls(fileName, extension, function(err, data) {
  if (err) {
    throw err;
  }
  data.forEach(function(file) {
    console.log(file);
  });
});
