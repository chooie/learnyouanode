var http = require('http');
var t2Map = require('through2-map');

var port = process.argv[2];

server = http.createServer(function(req, res) {
  req.pipe(t2Map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);
