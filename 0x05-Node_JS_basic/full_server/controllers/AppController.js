/**
 * 
 * 
 */

class AppController {
    static getHomepage(req, res) {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('Hello Holberton School!');

    }
}

module.exports = AppController;