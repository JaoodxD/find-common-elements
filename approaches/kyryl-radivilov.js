export default function kyrylRadivilov (arr1, arr2) {
  const someKeys = arr1.reduce((acc, el) => ({ ...acc, [el]: 1 }), {});
  
  return Object.keys(arr2.reduce((acc, el) => (someKeys[el]) ? {...acc, [el]: 1} : acc, {}));
}
