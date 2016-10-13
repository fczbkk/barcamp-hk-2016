const assert = require('assert');
const Calculator = require('./../lib/calculator.js');


describe('Calculator', function () {

  it('should add two numbers', function () {
    assert.equal(Calculator.add(3, 2), 5);
  });

  it('should subtract two numbers', function () {
    assert.equal(Calculator.subtract(3, 2), 1);
  });

});