export default function baseWithSets (arr1, arr2) {
  const commonElements = new Set()
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !commonElements.has(arr1[i])) {
        commonElements.add(arr1[i])
      }
    }
  }
  return [...commonElements]
}
