const sum = require('./sum');

test('Verwacht dat 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});