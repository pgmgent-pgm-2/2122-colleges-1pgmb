const users = ['Jan', 'Piet', 'Joris'];

const logUser = (usr) => {
    console.log('User:', usr);
}

const spanishUsers = users.forEach(user => {
    return `${user}os`
});

const nordicUsers = users.map(user => {
    return `${user}son`
}).join(',');

// console.log(nordicUsers, spanishUsers);
const cars = [{
    brand: 'Mercedes',
    electric: false
}, {
    brand: 'Rivian',
    electric: true
}, {
    brand: 'Tesla',
    electric: true
}];

const electricCars = cars.filter(car => {
    return car.electric;
})

// console.log(electricCars);
const numbers = [1, 2, 3, 9, 3, 3, 7];

const sum = numbers.reduce((total, item) => {
    // Loop 1: null + 1 = 1
    // Loop 2: 1 + 2 = 3
    // Loop 3: 3 + 3
    return total + item;
});

const num = numbers.find((number) => {
    return number === 3;
})
console.log(num);