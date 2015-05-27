var net = require('net');

function addZeroPadding(number) {
  return (number < 10 ? '0' : '') + number;
}

var server = net.createServer(function (socket) {
  var time = new Date(),
    year = time.getFullYear(),
    month = addZeroPadding(time.getMonth() + 1),
    day = addZeroPadding(time.getDate()),
    minutes = addZeroPadding(time.getMinutes()),
    hours = addZeroPadding(time.getHours());

  var date = year + '-' + month + '-' + day + ' ' +
    hours + ':' + minutes + '\n';
  socket.end(date);
});

server.listen(process.argv[2]);
