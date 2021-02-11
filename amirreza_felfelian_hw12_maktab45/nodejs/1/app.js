const http = require('http');



http.createServer(function (req, res) {
  if (req.url === '/' && req.method === 'GET') {
    res.write('Hello World!');
    res.end();
  }

}).listen(8080);




console.log('server is running on port 8080 ....');