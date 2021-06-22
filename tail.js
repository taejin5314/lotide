const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  return array.slice(1);
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(JSON.stringify(result), JSON.stringify(['Lighthouse', 'Labs']));

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
