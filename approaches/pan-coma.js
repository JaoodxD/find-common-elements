export default function panComa (a, v) {
  a.sort()
  v.sort()
  for (var i = 0, j = 0; i < Math.min(a.length, v.length); i++) {
    a[i] == v[i] && a[j] !== a[i] && (a[j++] = a[i])
  }
  return a.slice(0, j)
}
