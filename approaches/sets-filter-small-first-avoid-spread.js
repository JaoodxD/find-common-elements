export default function setsFilterSmallFirstAvoidSpread (arr1, arr2) {
  if (!arr1.length || !arr2.length) return []
  const [small, large] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
  const setLarge = new Set(large)
  const result = []
  const seen = new Set()
  for (const el of small) {
    if (setLarge.has(el) && !seen.has(el)) {
      seen.add(el)
      result.push(el)
    }
  }
  return result
}
