const http = require('http');
const fs = require('fs');

http.createServer(function (req,res) {
  if (req.url === "/" && req.method ==='GET') {
    res.write("hello from root lets read some JSON!!");
    res.end();


  } else if (req.url === "/json" && req.method === "GET") {
    let myJson = fs.readFileSync('./hello.json');
    res.write(myJson);
    res.end();


  } else {
    res.write('bad request');
    res.end();


  }

}).listen(8080);

console.log('server is running on port 8080');