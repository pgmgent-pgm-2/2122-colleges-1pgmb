const { mergeObjects } = require('./object');

test('Expects object to merge', () => {
    const firstObject = {
        brand: 'Xiaomi',
        model: 'Mi11'
    };

    const secondObject = {
        price: 400,
        tax: 21
    }

    const expectedObject = {
        brand: 'Xiaomi',
        model: 'Mi11',
        price: 400,
        tax: 21
    }

    // expect(mergeObjects(firstObject, secondObject)).toBe(expectedObject); Weet dat het over objecten gaan, vergelijken is moeilijker.
    expect(mergeObjects(firstObject, secondObject)).toEqual(expectedObject);
})