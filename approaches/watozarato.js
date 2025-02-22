export default function watozarato(arr1, arr2) {
  var commonElements = {};
  var obj2 = {};
  for (var i=0, max=arr2.length; i<max; i++) {
   obj2[arr2[i]] = arr2[i]
  }
  for (var i = 0, max=arr1.length; i<max; i++) {
   var str = arr1[i];
   if (arr1[i] in obj2) commonElements[str]=str;
  }
  return Object.values(commonElements);
 }
