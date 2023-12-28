/**
 * Creates a small server using the HTTP module
 */
const http = require('http');

// Create a local server to receive data from
const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!')
});

app.listen(1245)

module.exports = app;