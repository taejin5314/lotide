const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }');

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it('returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`returns undefined for findKeyByValue(bestTVShowsByGenre, "That '70s Show")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});

