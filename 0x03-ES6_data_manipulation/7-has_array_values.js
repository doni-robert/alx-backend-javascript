export default function hasValuesFromArray(set, array) {
  const intersect = array.filter((x) => set.has(x));
  if (intersect.length === array.length) {
    return true;
  }
  return false;
}
