"use strict";

describe("calculate", function () {
  beforeEach(function () {
    value1 = '4';
    value2 = '2';
  });
  afterEach(function () {
    value1 = null;
    value2 = null;
    operator = null;
  });
  it("handles addition", function () {
    operator = '+';
    expect(calculate()).to.equal(6);
  });
  it("handles subtraction", function () {
    operator = '-';
    expect(calculate()).to.equal(2);
  });
  it("handles multiplication", function () {
    operator = 'X';
    expect(calculate()).to.equal(8);
  });
  it("handle division", function () {
    operator = '/';
    expect(calculate()).to.equal(2);
  });
  it("alerts when operator is not set", function () {
    sinon.stub(window, 'alert');
    expect(calculate()).to.equal(0);
    expect(window.alert.calledOnce).to.be.true;
  });
  it("handles decimal numbers", function () {
    value1 = '4.4';
    operator = '+';
    expect(calculate()).to.equal(6.4);
  });
  it("handles negative numbers", function () {
    value1 = '-4';
    operator = '+';
    expect(calculate()).to.equal(-2);
  });
  it("treats unset operands as zero", function () {
    operator = '-';
    value2 = null;
    expect(calculate()).to.equal(4);
    value1 = null;
    expect(calculate()).to.equal(0);
  });
});