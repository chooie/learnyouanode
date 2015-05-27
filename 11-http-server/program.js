var http = require('http');
var fs = require('fs');

var port = process.argv[2],
  filePath = process.argv[3];

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  var file = fs.createReadStream(filePath);

  file.pipe(res);
});

server.listen(port);
