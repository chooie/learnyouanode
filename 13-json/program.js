var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true),
    pathName = urlObj.pathname,
    query = urlObj.query.iso,
    date,
    responseObj,
    jsonResponse;

  date = new Date(query);

  if (pathName === '/api/parsetime') {
    responseObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    jsonResponse = JSON.stringify(responseObj);

  } else if (pathName === '/api/unixtime') {
    responseObj = {
      unixtime: date.getTime()
    };
    jsonResponse = JSON.stringify(responseObj);
  }

  if (jsonResponse) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonResponse);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
