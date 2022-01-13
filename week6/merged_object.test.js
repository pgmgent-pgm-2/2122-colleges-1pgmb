const mergedObjects = require('./merged_object');

test('Expects two object to merge', () => {
  const firstObj = {
    brand: 'Xiaomi',
    model: 'Mi11',
  };

  const secondObj = {
    price: 400,
    tax: 21,
  };

  const expectedObj = {
    brand: 'Xiaomi',
    model: 'Mi11',
    price: 400,
    tax: 21,
  };

  expect(mergedObjects(firstObj, secondObj)).toEqual(expectedObj);
});