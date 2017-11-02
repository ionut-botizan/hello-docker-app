// Load the http module to create an http server.
const http = require('http');
const port = process.env.NODE_PORT || 8080;
const server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hai salut!\nSunt instanta : " + process.env.INSTANCE_NO);
});

server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
