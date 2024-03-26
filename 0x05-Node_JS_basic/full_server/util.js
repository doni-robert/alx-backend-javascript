const students = require('../3-read_file_async');

/**
 * Reads data from the database asynchronously.
 * @param {string} path - The path to the database file.
 * @returns {Promise<Array>} A promise that resolves with the data read from the database.
 */
function readDatabase(path) {
    return new Promise((resolve, reject) => {
        students(path)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = readDatabase;