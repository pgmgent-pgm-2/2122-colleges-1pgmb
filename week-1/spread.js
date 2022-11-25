const booze = ['Whisky', 'Gin', 'Vodka'];
const drinks = ['Tripel Karmeliet', 'Jupiler', 'Ouwen Duiker', ...booze];
// console.log(drinks);

let fruit = ['Banaan', 'Appels'];
// let fruitCopy = fruit;
let fruitCopy = [...fruit];
fruit.push('Mango');
// console.log(fruit, fruitCopy);

const firstName = 'Jan';
// console.log(...firstName);

const groupA = ['Dries', 'Seba'];
const groupB = ['Kyandro', 'Nikita'];

const students = [...groupA, 'Yana', ...groupB];
// console.log(students);

const numbersFromDatabase = [1, 50, 3, 20];
// console.log(Math.max(...numbersFromDatabase));

const numberOfArguments = (...args) => {
    return console.log(args.length);
}

numberOfArguments('maarten', 'loic', 'iznaur', 'quiten', 'jente', 'kyandro', 'lennert', 'yordi');