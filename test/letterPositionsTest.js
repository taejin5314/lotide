const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns [1] for letterPositions("hello").e', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it('returns [1, 11] for letterPositions("lighthouse in the house").i', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });

  it('returns [4, 14] for letterPositions("lighthouse in the house").t', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").t, [4, 14]);
  });

  it('returns [3, 5, 15, 18] for letterPositions("lighthouse in the house").h', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});