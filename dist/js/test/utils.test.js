"use strict";

describe("Utility function", function () {
  describe("isDigit", function () {
    it("returns true for digits", function () {
      for (var i = 0; i < 10; ++i) {
        expect(isDigit(i)).to.be.true;
      }
    });
    it("returns false for operators", function () {
      expect(isDigit('+')).to.be.false;
      expect(isDigit('-')).to.be.false;
      expect(isDigit('X')).to.be.false;
      expect(isDigit('/')).to.be.false;
      expect(isDigit('=')).to.be.false;
    });
    it("returns false for decimal", function () {
      expect(isDigit('.')).to.be.false;
    });
  });
  describe("isDecimal", function () {
    it("returns true for decimal character", function () {
      expect(isDecimal('.')).to.be.true;
    });
    it("returns false for digits", function () {
      expect(isDecimal('1')).to.be.false;
    });
    it("returns false for operators", function () {
      expect(isDecimal('+')).to.be.false;
    });
  });
  describe("isOperator", function () {
    it("returns true for plus", function () {
      expect(isOperator('+')).to.be.true;
    });
    it("returns true for minus", function () {
      expect(isOperator('-')).to.be.true;
    });
    it("returns true for multiplication", function () {
      expect(isOperator('X')).to.be.true;
    });
    it("returns true for division", function () {
      expect(isOperator('/')).to.be.true;
    });
    it("returns false for equal", function () {
      expect(isOperator('=')).to.be.false;
    });
    it("returns false for digits", function () {
      expect(isOperator(0)).to.be.false;
    });
    it("returns false for decimal", function () {
      expect(isOperator('.')).to.be.false;
    });
  });
  describe("isOperatorOrEqual", function () {
    it("returns true for operators", function () {
      expect(isOperatorOrEqual('+')).to.be.true;
      expect(isOperatorOrEqual('-')).to.be.true;
      expect(isOperatorOrEqual('X')).to.be.true;
      expect(isOperatorOrEqual('/')).to.be.true;
    });
    it("returns true for equal", function () {
      expect(isOperatorOrEqual('=')).to.be.true;
    });
    it("returns false for digits", function () {
      expect(isOperatorOrEqual(0)).to.be.false;
    });
    it("returns false for decimal", function () {
      expect(isOperatorOrEqual('.')).to.be.false;
    });
  });
  describe("isClear", function () {
    it("returns true for C", function () {
      expect(isClear('C')).to.be.true;
    });
  });
});