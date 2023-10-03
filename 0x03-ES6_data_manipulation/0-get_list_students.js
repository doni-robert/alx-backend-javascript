export default function getListStudents() {
  const ids = [1, 2, 5];
  const firstName = ['Guillaume', 'James', 'Serena'];
  const location = ['San Francisco', 'Columbia', 'San Francisco'];
  const obj = ids.map((id, index) => ({
    id,
    firstName: firstName[index],
    location: location[index],
  }));

  return obj;
}
