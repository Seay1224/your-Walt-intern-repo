const { add, divide } = require('./math_utils');

// test case 1: plus
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
});

//test case 2: division
test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

// test case 3: error handling
test('throws error when dividing by zero', () => {
    expect(() => {
        divide(10, 0);
    }).toThrow("Cannot divide by zero");
});