const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { Calc } = require('../../src/Calc')

let calc = new Calc();
let result;
Given('there is a calculator', function () {
  // Write code here that turns the phrase above into concrete actions
  return calc;
});

When('we add {int} and {int}', function (first, second) {
  result = calc.add(first, second)
 
})

Then('the result should be {int}', function (expected) {
  expect(result).to.equal(expected)
})