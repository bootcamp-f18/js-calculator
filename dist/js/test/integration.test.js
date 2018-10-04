"use strict";

describe("button event handler", function () {
  beforeEach(function () {
    value1 = null;
    value2 = null;
    operator = null;
    lastButton = null;
    display = {
      value: '0'
    };
  });
  afterEach(function () {
    value1 = null;
    value2 = null;
    operator = null;
    lastButton = null;
    display = null;
  });

  function getClickEvent(char) {
    return {
      target: {
        innerHTML: char
      }
    };
  }

  it("replaces display when digit button pressed and display is 0", function () {
    buttonLogic(getClickEvent('1'));
    expect(display.value).to.equal('1');
  });
  it("appends digit to display when digit button clicked", function () {
    display.value = "1";
    buttonLogic(getClickEvent('1'));
    expect(display.value).to.equal('11');
  });
  it("replaces display when digit button clicked after operator", function () {
    lastButton = '+';
    buttonLogic(getClickEvent('1'));
    expect(display.value).to.equal('1');
  });
  it("appends decimal to display when decimal button clicked", function () {
    display.value = "11";
    buttonLogic(getClickEvent('.'));
    expect(display.value).to.equal('11.');
  });
  it("does not append decimal if display already contains a decimal", function () {
    display.value = "11.";
    buttonLogic(getClickEvent('.'));
    expect(display.value).to.equal('11.');
    display.value = "11.23";
    buttonLogic(getClickEvent('.'));
    expect(display.value).to.equal('11.23');
  });
  it("clears the display when clear button clicked", function () {});
  it("performs and displays result of calculation when equal button clicked", function () {
    value1 = '1';
    operator = '+';
    display.value = lastButton = '2';
    buttonLogic(getClickEvent('='));
    expect(display.value).to.equal(3);
    expect(value1).to.equal(3);
    expect(operator).to.be.null;
  });
  it("performs and displays result of calculation when operator clicked and value1 is set", function () {
    value1 = '1';
    operator = '+';
    display.value = lastButton = '2';
    buttonLogic(getClickEvent('-'));
    expect(display.value).to.equal(3);
    expect(value1).to.equal(3);
    expect(operator).to.equal('-');
  });
  it("sets value1 and operator when operator clicked", function () {
    display.value = lastButton = '1';
    buttonLogic(getClickEvent('X'));
    expect(display.value).to.equal('1');
    expect(operator).to.equal('X');
    expect(value1).to.equal('1');
  });
  it("updates operator when operators clicked successively", function () {
    value1 = display.value = '1';
    operator = lastButton = '+';
    buttonLogic(getClickEvent('-'));
    expect(display.value).to.equal('1');
    expect(operator).to.equal('-');
    expect(lastButton).to.equal('-');
  });
  it("clears state when the clear button is pressed", function () {
    value1 = "1";
    operator = "-";
    display.value = lastButton = "2";
    buttonLogic(getClickEvent('C'));
    expect(display.value).to.equal('0');
    expect(value1).to.be.null;
    expect(value2).to.be.null;
    expect(operator).to.be.null;
    expect(lastButton).to.equal('C');
  });
  it("replaces display when digit button is clicked after equal", function () {
    display.value = value1 = "3";
    value2 = "2";
    operator = "+";
    lastButton = '=';
    buttonLogic(getClickEvent('1'));
    expect(display.value).to.equal('1');
    expect(value1).to.be.null;
    expect(value2).to.be.null;
    expect(operator).to.be.null;
  });
});