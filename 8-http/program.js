var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data) {
    if (err) {
      throw err;
    }
    var stringData = data.toString();

    console.log(stringData.length);
    console.log(stringData);
  }));
});
