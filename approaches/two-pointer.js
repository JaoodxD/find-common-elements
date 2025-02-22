export default function twoPointer (arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let i = 0, j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]); // Avoid duplicates
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
