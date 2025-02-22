export default function artemBoyko(arr1, arr2) {
  var set1 = new Set(arr1);
  return arr2.filter((x) => set1.has(x));
};
