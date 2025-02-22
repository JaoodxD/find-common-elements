export default function serzh(arr1, arr2) {
  return arr1.filter(Set.prototype.delete, new Set(arr2));
}
