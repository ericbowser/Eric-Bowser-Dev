const https = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Creating Node.js server!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});