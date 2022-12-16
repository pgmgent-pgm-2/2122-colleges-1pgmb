const http = require('http');

http.createServer((req, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('Hello server!');
}).listen(8080);