
export default function danielMednikov(arr1, arr2) {
  var bitArray = new Uint8Array(10_000);
  var bitmask = new Uint8Array(10_000);

  var _hash = (value) => {
    return (value ^ (value >>> 3) ^ (value << 5)) % 100;
  };
  var add = (value) => {
    bitArray[_hash(value)] = 1;
  };
  var has = (value) => {
    return bitArray[_hash(value)] === 1;
  };

  for (var i = 0; i < arr1.length; i++) add(arr1[i]);

  var result = [];

  for (var i = 0; i < arr2.length; i++) {
    if (has(arr2[i]) && !bitmask[arr2[i]]) {
      result.push(arr2[i]);
      bitmask[arr2[i]] = 1;
    }
  }

  return result;
}
