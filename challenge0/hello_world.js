var http = require('http');

http.createServer(function(request, response) {
  response.writeHeader({ 'Content-Type': 'text-plain' });
  response.end('hello world!');
}).listen(3000);

