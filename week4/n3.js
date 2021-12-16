console.clear(); // Clear the console
console.log('My %s is %d years', 'cat frodo', 17);
const person = {
  firstname: 'Willy',
  lastname: 'Wonka'
};
console.log(`%o`, person);

const fruit = [
  'apple',
  'orange',
  'melon',
  'orange'
];
fruit.forEach((njam) => {
  console.count(njam);
});

const doSomething = () => console.log('Do something');
const measureFunction = () => {
  console.time('doSomething()');
  doSomething();
  console.timeEnd('doSomething()');
}
measureFunction();

// Loop with colors
let tempStr = '';
for (let b = 0; b < 8; b++) {
  for (let t = 0; t < 8; t++) {
    tempStr += `\x1b[1;3${t}m\x1b[4${b}m${'LOVE'}\x1b[0m\t`;
  }
  tempStr += `\n`;
}
console.log(tempStr);
