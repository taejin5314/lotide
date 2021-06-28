const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;