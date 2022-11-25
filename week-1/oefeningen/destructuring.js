const sales = [
    { item: 'PS4 Pro', sold: 3, original: 399.99 },
    { item: 'Xbox One X', sold: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', sold: 4, original: 299.99 },
    { item: 'PS2 Console', sold: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', sold: 2, original: 199.99, discount: 0.65 },
    { item: 'PS5', sold: 1, original: 2, discount: 0.5 }
];

const calculateSalesTotals = (array) => {
    const calculation = {
        amount: 0,
        money: 0,
        discount: 0
    }

    array.forEach(({sold, original, discount = 0}) => {
        calculation.amount += sold;
        calculation.money += sold * (original - (original * discount));
        calculation.discount += original * discount;
    });

    return calculation;
};

console.log(calculateSalesTotals(sales));