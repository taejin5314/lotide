const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  const ab = {
    a: "1",
    b: "2"
  };
  const ba = {
    b: "2",
    a: "1"
  };
  const abc = {
    a: "1",
    b: "2",
    c: "3"
  };
  const cd = {
    c: "1",
    d: ["2", 3]
  };
  const dc = {
    d: ["2", 3],
    c: "1"
  };

  it('returns true for eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it('returns false for eqObjects({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }' ,() => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it('returns true for eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
});
