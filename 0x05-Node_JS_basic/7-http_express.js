// Importing required modules
const express = require('express');
const students = require('./3-read_file_async');

// Setting up server configurations
const app = express();
const hostname = '127.0.0.1';
const port = 1245;

// Handling GET requests to the root route '/'
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Handling GET requests to the '/students' route
app.get('/students', async (req, res) => {
  try {
    // Attempting to load student data asynchronously
    const data = await students(process.argv[2]);
    const response = `Number of students: ${data.students.length}\n`
      + `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`
      + `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${response}`);
  } catch (err) {
    // Handling errors if data loading fails
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${err.message}`);
  }
});

// Starting the server and listening for incoming connections
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
