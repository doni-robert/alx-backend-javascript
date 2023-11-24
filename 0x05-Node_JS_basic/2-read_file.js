/**
 * 
 */
const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf8' });
        console.log(data.length);
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;