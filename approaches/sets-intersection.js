export default function setsIntersection (arr1, arr2) {
  return [...new Set(arr1).intersection(new Set(arr2))]
}
