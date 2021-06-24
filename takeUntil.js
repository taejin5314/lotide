const takeUntil = function(array, callback) {
  const result = [];
  let i = 0;
  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }
  return result;
};

const eqArrays = (actual, expected) => {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);