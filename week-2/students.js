const s = require('./students.json');

const studentsAsString = JSON.stringify(s);
const studentsAsArray = JSON.parse(studentsAsString);

console.log(studentsAsArray);

s.forEach(({firstName, isMale}) => {
    console.log(`${firstName} is ${isMale ? 'een man' : 'geen man'}.`);
})