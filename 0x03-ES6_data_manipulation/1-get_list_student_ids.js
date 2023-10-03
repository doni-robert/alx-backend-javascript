export default function getListStudentsIds(objArray) {
  if (Array.isArray(objArray)) {
    const ids = objArray.map((obj) => obj.id);
    return ids;
  }
  return [];
}
