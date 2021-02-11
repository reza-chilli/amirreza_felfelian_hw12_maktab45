const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', function(err, data) {
      if (err) return console.log('no such file');
      res.write(data);
      res.end();
    })
  }
}).listen(8080);

console.log('server running on port 8080');