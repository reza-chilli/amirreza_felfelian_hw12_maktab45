const http = require('http');

http.createServer(function(req,res) {
  if (req.url === '/' && req.method === 'GET') {
    res.write('go to /about');
    res.end();
  } else if (req.url === '/about' && req.method === "GET") {
    res.write(req.url);
    res.end();
  } else {
    res.write('bad request');
    res.end();
  }
}).listen(8080)

console.log('server is running on port 8080');