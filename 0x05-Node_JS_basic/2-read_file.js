/**
 *
 *
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    const lines = data.split('\n');

    const items = {};

    for (const line of lines.slice(1)) {
      const rowData = line.split(',');

      if (rowData[3] in items) {
        items[rowData[3]].push(rowData[0]);
      } else {
        items[rowData[3]] = [];
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const item in items) {
      if (Object.prototype.hasOwnProperty.call(items, item)) {
        console.log(`Number of students in ${item}: ${items[item].length}. List:${items[item]}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = countStudents;
