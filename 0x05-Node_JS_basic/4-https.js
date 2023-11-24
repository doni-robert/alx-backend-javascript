/**
 * Creates a small server using the HTTP module
 */
const http = require('node:http');

// Create a local server to receive data from
const app = http.createServer();

// Listen to the request event
app.on('request', (request, res) => {
    res.end('Hello Holberton School!');
});

app.listen(1245)

module.exports = app;