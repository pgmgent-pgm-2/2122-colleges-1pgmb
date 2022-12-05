const numbers = [2, 1, 3];
// const letters = new Array(3);
numbers[2] = 3;

numbers.push(4);
numbers.unshift(0);
numbers.pop();

numbers.forEach(number => {
    console.log(number);
});

const newNumbers = numbers.map(number => {
    return number + 1;
})

newNumbers.reverse();
numbers.sort();

// console.log(numbers, `Mijn getallen zijn: ${newNumbers.join('|')}`);// 1 | 2 | 3 | 4

const letters = ['a', 'c', 'b'];
letters.sort((letter1, letter2) => {
    // 3 mogelijke waarden dat we kunnen returnen: -1, 1, 0
    if (letter1 === 'c' && letter2 === 'a') return 1;
});
// console.log(letters);

const students = ['Pol', 'Piet', 'Peter'];

const headboy = students[0];

const headboi = students.filter(student => {
    return student === 'Pol';
});

const cars = [{
    type: 'electric',
    name: 'Tesla'
}, {
    type: 'electric',
    name: 'Rivian'
}, {
    type: 'gasoline',
    name: 'Ferrari'
}];

cars.filter(({type}) => {
    return type === 'electric';
})

const logs = [{
    name: 'Login',
    success: true
}, {
    name: 'Ordered',
    success: true
}, {
    name: 'Payment',
    success: true
}];

const isSuccesfull = logs.every(log => {
    return log.success;
});

console.log(isSuccesfull);

const foodAvailable = ['wafelsd', 'wafels', 'ijsjes', 'pannekoeken', 'koffie'];

const wafelsAreOk = foodAvailable.some(food => {
    return food === 'wafels';
});

console.log(wafelsAreOk);

const arr = [1, 2, 3, ['a', 'b', 'c'],, ,  4, 5];

const mappedArr = arr.flatMap(item => {
    return typeof item === 'number' ? item + 1 : item;
})

console.log(mappedArr);

const highNumbers = [15, 16, 17, 18, 19];

const sum = highNumbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});

console.log(sum);
