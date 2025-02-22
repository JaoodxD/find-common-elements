export default function watozaratoSmallLastImproved(arr1, arr2) {
  if (arr1.length < arr2.length) {
    var temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  var commonElements = {};
  var obj2 = {};
  for (var i=0, max=arr2.length; i<max; i++) {
   (!(arr2[i] in obj2)) && (obj2[arr2[i]] = arr2[i]);
  }
  for (var i = 0, max = arr1.length; i < max; i++) {
    
   (arr1[i] in obj2) && (commonElements[arr1[i]]=arr1[i]);
  }
  return Object.values(commonElements);
 }
