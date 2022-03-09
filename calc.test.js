const operate = require('./calc');

test('Addition', () => {
    expect(operate(1, '+', 2)).toBe(3);
});

test('Subtraction', () => {
    expect(operate(3, '-', 2)).toBe(1);
});

test('Multiplication', () => {
    expect(operate(3, '*', 2)).toBe(6);
});

test('Division', () => {
    expect(operate(6, '/', 2)).toBe(3);
});