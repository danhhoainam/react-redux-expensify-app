
const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(3, 6);

    expect(result).toBe(9);
});

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;
test('should generate greeting from name', () => {
    const result = generateGreeting('Nichol');
    expect(result).toBe('Hello Nichol');
});
test('should generate greeting for anonymous', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});