export default function setsSmallForeach(arr1, arr2) {
  if (!arr1.length || !arr2.length) return []
  var set1 = new Set(arr1)
  var set2 = new Set(arr2)
    ;[set1, set2] = set1.size < set2.size ? [set1, set2] : [set2, set1]
  var result = []
  set1.forEach(el => set2.has(el) && result.push(el))
  return result
}
