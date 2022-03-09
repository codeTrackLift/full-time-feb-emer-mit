const Greet = require('./greet');

test('Single name', () => {
    expect(Greet('Elizabeth')).toBe('Hello, Elizabeth.');
});

test('No name', () => {
    expect(Greet()).toBe('Hello there!');
});

test('ALL CAPS', () => {
    expect(Greet('JOSE')).toBe('HELLO JOSE!');
});

test('Two names', () => {
    expect(Greet(['Jose','Pep'])).toBe('Hello, Jose, Pep');
});

test('Multiple names', () => {
    expect(Greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
});