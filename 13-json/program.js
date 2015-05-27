var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true),
    pathName = urlObj.pathname,
    query = urlObj.query.iso,
    date,
    responseObj;

  date = new Date(query);

  if (pathName === '/api/parsetime') {
    responseObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.end(JSON.stringify(responseObj))

  } else if (pathName === '/api/unixtime') {
    responseObj = {
      unixtime: date.getTime()
    };
    res.end(JSON.stringify(responseObj));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
});

server.listen(process.argv[2]);
