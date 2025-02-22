export default function setsIntersection2 (arr1, arr2) {
  return Array.from(new Set(arr1).intersection(new Set(arr2)))
}
