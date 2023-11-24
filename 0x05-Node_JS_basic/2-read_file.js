/**
 *
 *
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    const lines = (data.split('\n')).slice(1);

    const items = {};

    for (const line of lines) {
      const rowData = line.split(',');

      if (rowData[3] in items) {
        items[rowData[3]].push(` ${rowData[0]}`);
      } else {
        items[rowData[3]] = [];
        items[rowData[3]].push(rowData[0]);
      }
    }

    console.log(`Number of students: ${lines.length}`);

    for (const item in items) {
      if (Object.prototype.hasOwnProperty.call(items, item)) {
        console.log(`Number of students in ${item}: ${items[item].length}. List: ${items[item]}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
