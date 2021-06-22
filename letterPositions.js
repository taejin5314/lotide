const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) results[sentence[i]].push(i);
    else if (sentence[i] !== ' ') results[sentence[i]] = [i];
  }
  return results;
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions("lighthouse in the house"));