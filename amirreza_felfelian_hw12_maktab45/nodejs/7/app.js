const http = require('http');
const fs = require('fs');


let users = fs.readFileSync('./users.json', "utf-8");
users = JSON.parse(users);
console.log(users);
http.createServer(function(req,res) {
  if (req.url==='/' && req.method === 'GET') {
    fs.readFile('./public/index.html', (err, data)=> {
      if (err) return console.log('something went wrong');
      res.write(data);
      res.end();
    })
  } else if (req.url==='/style.css' && req.method === "GET") {
    fs.readFile('./public/style.css', (err, data)=> {
      if (err) return console.log('something went wrong');
      res.write(data);
      res.end();
    })
  } else if (req.url==='/contact' && req.method === 'POST') {
    console.log(req);
    res.write("req");
    res.end();
  }
}).listen(8080);

console.log('server running on port 8080');