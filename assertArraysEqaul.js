const eqArrays = (actual, expected) => {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual('Lighthouse Labs', 'Bootcamp');
assertArraysEqual(1, 1);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]);