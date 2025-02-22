export default function base (arr1, arr2) {
  const commonElements = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && commonElements.indexOf(arr1[i]) === -1) {
        commonElements.push(arr1[i])
      }
    }
  }
  return commonElements
}
