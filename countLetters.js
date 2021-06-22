const assertEqual = function (actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (str) {
  const results = {},
    newStr = str.split(' ').join('');
  for (const letter of newStr) {
    if (results[letter]) {
      results[letter]++;
    } else results[letter] = 1
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));