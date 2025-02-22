export default function serzhSmallLast(arr1, arr2) {
  if (arr1.length < arr2.length) { 
    var temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  return arr1.filter(Set.prototype.delete, new Set(arr2));
}
