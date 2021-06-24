const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const ob1Length = Object.keys(object1).length,
    ob2Length = Object.keys(object2).length;
  let count = 0;
  if (ob1Length === ob2Length) {
    for (const ob1Value in object1) {
      for (const ob2Value in object2) {
        if (ob1Value === ob2Value) {
          if (object1[ob1Value] === object2[ob2Value]) count++;
          else if (Array.isArray(object1[ob1Value]) && Array.isArray(object2[ob2Value])) {
            if (eqArrays(object1[ob1Value], object2[ob2Value])) count++;
          } else if (eqObjects(object1[ob1Value], object2[ob2Value])) count++;
        }
      }
    }
    if (ob1Length && ob1Length === count) return true;
    return false;
  }
  return false;
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({
  a: {
    z: 1
  },
  b: 2
}, {
  a: {
    z: 1
  },
  b: 2
}), true); // => true

assertEqual(eqObjects({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: {
    z: 1
  },
  b: 2
}), false); // => false

assertEqual(eqObjects({
  a: {
    y: 0,
    x: {
      h: 0
    },
    z: 1
  },
  b: 2
}, {
  a: {
    z: 1,
    y: 0,
    x: {
      h: 0
    }
  },
  b: 2
}), true); // => false

assertEqual(eqObjects({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: 1,
  b: 2
}), false); // => false