const Calc = require('./calculator');

let calculator;

beforeEach(() => {
  calculator = new Calc(); // Create a new instance before each test
});

test('adds 1 and 2 sequentially to equal 3', () => {
  calculator.add(1); // Add 1 to the initial result (0)
  expect(calculator.add(2)).toBe(3); // Add 2 to the current result (1)
});

test('subtracts 5 from 8 to equal 3', () => {
  calculator.add(8); // Set the initial result to 8
  expect(calculator.subtract(5)).toBe(3); // Subtract 5 from the current result (8)
});

test('multiplies 2 by 3 to equal 6', () => {
  calculator.add(2); // Set the initial result to 2
  expect(calculator.multiply(3)).toBe(6); // Multiply the current result (2) by 3
});

test('divides 6 by 2 to equal 3', () => {
  calculator.add(6); // Set the initial result to 6
  expect(calculator.divide(2)).toBe(3); // Divide the current result (6) by 2
});

test('throws error when dividing by zero', () => {
  expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
});

test('resets the calculator to 0', () => {
  calculator.add(10); // Set the initial result to 10
  calculator.reset(); // Reset the result to 0
  expect(calculator.getResult()).toBe(0); // Verify the result is 0
});