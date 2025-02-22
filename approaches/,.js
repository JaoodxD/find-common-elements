export default function panComa (a, v) {
  var sortfn=(l,r)=>l<r?-1:1;
  a = a.toSorted(sortfn);
  v = v.toSorted(sortfn);
  // console.log(a,v);
  var i=0,j=0,r=[a[0]-1];
  while (i<a.length&&j<v.length){
     a[i]==v[j]?(
        (r[r.length-1]!==a[i]&&r.push(a[i])),i++,j++)
        :a[i]<v[j]?i++:j++;
  }
  r[0]=r.pop();
  return r;
}
