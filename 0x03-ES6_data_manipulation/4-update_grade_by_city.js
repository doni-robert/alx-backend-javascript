export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const gradeStudents = studentsByCity.map((student) => {
    for (const item of newGrades) {
      if (item.studentId === student.id) {
        if ('grade' in item) {
          student.grade = item.grade;
        } else {
          student.grade = 'N/A';
        }
      }
    }
  });
  return gradeStudents;
}
