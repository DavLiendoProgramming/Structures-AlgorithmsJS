// [2,5,1,2,3,5,1,2,4]
// [2,1,1,2,3,5,1,2,4]
//[2,3,4,5]
function firstRecur(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return 'not recurrent found';
}

function firstRecur2(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    } else {
      map[arr[i]] = true;
    }
  }
  return undefined;
}

console.log(firstRecur2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log('first array');
console.log(firstRecur2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log('second array');

console.log(firstRecur2([2, 3, 4, 5]));
