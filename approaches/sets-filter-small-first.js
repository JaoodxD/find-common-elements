export default function setsFilterSmallFirst (arr1, arr2) {
  if (!arr1.length || !arr2.length) return []
  const [small, large] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
  const setLarge = new Set(large)
  return [...new Set(small)].filter(el => setLarge.has(el))
}
