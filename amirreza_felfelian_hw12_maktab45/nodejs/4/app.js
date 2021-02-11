const http = require("http");

http.createServer(function(req, res) {
  if (req.url==='/' && req.method === 'GET') {
    res.write('hello web application');
    res.end();
  } else if (req.url === '/about' && req.method ==='GET') {
    res.write('ABOUT ME');
    res.end();
  } else if (req.url === '/user1' && req.method ==='GET') {
    res.write('ABOUT USER1');
    res.end();
  } else if (req.url === '/user2' && req.method ==='GET') {
    res.write('ABOUT USER2');
    res.end();
  } else if (req.url === '/user3' && req.method ==='GET') {
    res.write('ABOUT USER3');
    res.end();
  } else {
    res.write('NOT FOUND');
    res.end();
  }
}).listen(8080);

console.log('server running on port 8080');