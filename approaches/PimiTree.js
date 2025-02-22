export default function PimiTree(arr1, arr2) {
  var commonElementsMap = new Map();

  for (var i = 0; i < arr1.length; i++) {
      commonElementsMap.set(arr1[i], false)
  }
  for (var j = 0; j < arr2.length; j++) {
      commonElementsMap.has(arr2[j]) && commonElementsMap.set(arr2[j], true)
  }
  
  const iterator = commonElementsMap.entries();

  var result = [];
  for (var k = 0; k < commonElementsMap.size; k++) {
      var value = iterator.next().value;
      
      value[1] === true && result.push(value[0]);
  }

  return result;
}
