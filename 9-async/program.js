var http = require('http');
var bl = require('bl');

var urls = [],
  args = process.argv;

for (var i = 2; i < 5; i += 1) {
  urls.push(args[i]);
}

function printData(arr) {
  arr.forEach(function(elem, i) {
    console.log(elem);
  });
}

var dataArr = [],
  count = 0;

urls.forEach(function(url, index) {
  http.get(url, function(response) {
    var i = index;
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
      if (err) {
        throw err;
      }
      dataArr[i] = data.toString();
      count += 1;

      // last call
      if (count === 3) {
        printData(dataArr);
      }
    }));
  });
});
