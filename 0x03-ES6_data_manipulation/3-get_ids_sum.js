export default function getStudentIdSum(studentList) {
  const sumId = studentList.reduce((total, obj) => total + obj.id, 0);
  return sumId;
}
