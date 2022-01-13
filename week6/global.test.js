test('null', () => {
  const n = null;

  expect(n).toBeDefined();
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

const shoppingList = [
  'milk',
  'apples',
];

test('The shopping list must contain milk otherwise women angry', () => {
  expect(shoppingList).toContain('milk');
});

test('Check if auw is present in the name of the person', () => {
  expect('Philippe De Pauw').toMatch(/auw/);
});