const fs = require('fs');
const students = require('./3-read_file_async');

/**
 * 
 * 
 */
function readDatabase(path) {
    return new Promise((res, rej) => {
        try {
            const data = students(path);
            res(data)
        } catch (err) {
            rej(err);
        }
    });
}

