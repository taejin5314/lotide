// const eqArrays = (actual, expected) => {
//   if (actual.length === expected.length) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) return false;
//     }
//     return true;
//   }
//   return false;
// };

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
// };

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else newArr.push(arr[i]);
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));