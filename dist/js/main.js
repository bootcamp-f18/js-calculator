"use strict";

// This is the JavaScript file we edit
var display = document.getElementById('display');
var first_num = null;
var second_num = null;
var state = 'ready';
var sign;

function input(digit) {
  if (digit === '.' && display.innerHTML.search(/\./) >= 0) {
    return;
  }

  if (state === 'ready_second' || state === 'solved') {
    display.innerHTML = digit;
    state = 'ready';
  } else {
    if (display.innerHTML === '0') {
      display.innerHTML = digit;
    } else {
      display.innerHTML += digit;
    }
  }
}

function clear_display() {
  display.innerHTML = '0';
}

function operator(current_sign) {
  if (first_num == null) {
    first_num = parseFloat(display.innerHTML);
    state = 'ready_second';
    sign = current_sign;
  } else {
    second_num = parseFloat(display.innerHTML);
    first_num = calculate();
    state = 'ready_second';
    sign = current_sign;
  }
}

function calculate() {
  second_num = parseFloat(display.innerHTML);
  var solution;
  var temp_first = first_num.toString();
  var temp_second = second_num.toString(); //temp_first=temp_first.substring(temp_first.search(/\./)).length;

  temp_first = temp_first.substring(temp_first.search(/\./) + 1).length;
  temp_second = temp_second.substring(temp_second.search(/\./) + 1).length;
  var dec_places;

  if (temp_first > temp_second) {
    dec_places = temp_first;
  } else {
    dec_places = temp_second;
  }

  if (sign === '/') {
    solution = first_num / second_num;
  } else if (sign === 'x') {
    solution = first_num * second_num;
  } else if (sign === '-') {
    solution = first_num - second_num;
  } else if (sign === '+') {
    solution = first_num + second_num;
  }

  display.innerHTML = solution.toFixed(dec_places);
  state = 'solved';
  return solution.toFixed(dec_places);
}
