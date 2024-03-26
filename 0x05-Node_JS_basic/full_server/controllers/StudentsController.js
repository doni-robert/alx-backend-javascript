const readDatabase = require('../util');
/**
 * 
 * 
 */
const path = './database.csv';
class StudentsController {
    
    static getAllStudents(req, res) {
        readDatabase(path)
            .then(data => {
                res.status(200).setHeader('content-Type', 'text/plain');
                const response = `This is the list of our students\n`
                    + `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`
                    + `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;
                res.send(response);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }

    static getAllStudentsByMajor(req, res) {
        const field = req.params.major;

        readDatabase(path)
            .then(data => {
                if (!(field in data.students.field)) {
                    res.status(500).send('Major parameter must be CS or SWE');
                } else {
                    console.log(data)
                    const filteredStudents = data.students.filter(student => student.field === field);
                    res.status(200).send(`List: ${filteredStudents.join(', ')}`);
                }
            })
            .catch(err => {
                res.status(500).send(err);
            });        
    }
}

module.exports = StudentsController;