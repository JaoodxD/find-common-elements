export default function watozaratoSmallLast(arr1, arr2) {
  if (arr1.length < arr2.length) {
    var temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  var commonElements = {};
  var obj2 = {};
  for (var i = 0, max = arr2.length; i < max; i++) {
    var str = arr2[i];
    obj2[str] = str;
  }
  for (var i = 0, max = arr1.length; i<max; i++) {
   var str = arr1[i];
   if (str in obj2) commonElements[str]=str;
  }
  return Object.values(commonElements);
 }
