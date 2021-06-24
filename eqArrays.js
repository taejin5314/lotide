const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (actual, expected) => {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
        if (!eqArrays(actual[i], expected[i])) return false;
      } else if (actual[i] !== expected[i]) return false;
    }
    return true;
  }
  return false;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4]
]), true); // => true

assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4, 5]
]), false); // => false
assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3], 4
]), false); // => false