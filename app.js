var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function(req, res) {   // 2 - creating server

  // set response header
  //replit edits
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("hello");
  res.end();

});

server.listen(80); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')