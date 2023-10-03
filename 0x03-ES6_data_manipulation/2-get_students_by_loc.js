export default function getStudentsByLocation(studentsList, city) {
  const objArray = studentsList.filter((obj) => obj.location === city);
  return objArray;
}
