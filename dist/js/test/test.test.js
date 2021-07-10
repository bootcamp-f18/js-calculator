"use strict";

describe("Testing", function () {
  it("is fun", function () {
    var foo = 'bar';
    chai.assert.notTypeOf(foo, 'number');
    chai.expect(foo).to.be.a('string');
    chai.should();
    foo.should.be.a('string');
  });
  it("no really", function () {
    chai.expect(value1).to.be.null;
  });
});