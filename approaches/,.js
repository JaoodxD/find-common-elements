export default function panComa (a, v) {
  a.sort();
  v.sort();
  var e = Math.min(a.length,v.length);
  var i=0,j=0,r=[a[0]-1];
  while (i<e&&j<e){
     a[i]==v[j]?(
        (r[r.length-1]!==a[i]&&r.push(a[i])),i++,j++)
        :a[i]<v[j]?i++:j++;
  }
  r[0]=r.pop();
  return r;
}
