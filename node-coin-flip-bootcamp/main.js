// http runs internet address links.
// http stands for hypertext transfer protocol
const http = require('http');
// fs is for file systems
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("plug in to localhost 8000");
    res.write(data);
    res.end();
  });
}).listen(8000);
