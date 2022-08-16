const calculator = require('./calculator');

describe('Calculator', () => {
  test('Add', () => {
    expect(calculator.add(4, 7)).toBe(11);
  })
  test('Add', () => {
    expect(calculator.add(40, 70)).toBe(110);
  })
  test('Add', () => {
    expect(calculator.add(-4, 7)).toBe(3);
  })
})

describe('Calculator', () => {
  test('Subtract', () => {
    expect(calculator.subtract(4, 7)).toBe(-3);
  })
  test('Subtract', () => {
    expect(calculator.subtract(40, 70)).toBe(-30);
  })
  test('Subtract', () => {
    expect(calculator.subtract(4, -7)).toBe(11);
  })
})

describe('Calculator', () => {
  test('Divide', () => {
    expect(calculator.divide(4, 7)).toBeCloseTo(0.57);
  })
  test('Divide', () => {
    expect(calculator.divide(4, 8)).toBeCloseTo(0.5);
  })
  test('Divide', () => {
    expect(calculator.divide(4, 6)).toBeCloseTo(0.6666);
  })
})

describe('Calculator', () => {
  test('Multiply', () => {
    expect(calculator.multiply(4, 7)).toBe(28);
  })
  test('Multiply', () => {
    expect(calculator.multiply(40, 70)).toBe(2800);
  })
  test('Multiply', () => {
    expect(calculator.multiply(-4, 7)).toBe(-28);
  })
})