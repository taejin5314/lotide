// TEST/ASSERTION FUNCTIONS
const eqArrays = function (actual, expected) {
  //...
}

const assertArraysEqual = function (actual, expected) {
  //...
}

// ACTUAL FUNCTION
const middle = function (array) {
  const arrLength = array.length;
  if (arrLength < 3) return [];
  else if (arrLength % 2 !== 0) return [array[Math.floor(arrLength / 2)]];
  else return [array[arrLength / 2 - 1], array[arrLength / 2]];
}

// TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]