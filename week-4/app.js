const {m, d} = require('./helpers');
const readline = require('readline');
const fs = require('fs');

// const multiplication = m(2, 7);

// const inputField = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// inputField.question('Wat is jouw naam?', (input) => {
//     console.log(`Jouw naam is ${input}`);
// });

const fileContent = fs.readFile('./data/students.json', 'utf-8', (err, data) => {
    return JSON.stringify(data);
});

const newStudent = {
    "name": "Mieke",
    "age": 18
};

fs.writeFile('./data/students.json', JSON.stringify([newStudent]), (err) => {
    console.log(err);
});

