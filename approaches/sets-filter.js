export default function setsFilter (arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter(el => set2.has(el));
}
