const expect = require('chai').expect;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs'])).to.eql(['Lighthouse', 'Labs']);
  });
});
