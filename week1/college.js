console.log('Start college Programming 2');

/* 
Symbol
======
- Built-in object
- Unieke sleutel 
- Eigenschappen is een string of een symbol
- Possible one parameter => description of the symbol
- Can't be enumerable
*/
let id1 = Symbol('unique student');
console.log(id1);
let id2 = Symbol('unique student');
console.log(id1 === id2);
// Get the description
console.log(id1.description);

const cats = {};
const f = Symbol('Frodo');
const c = Symbol('Corneel');
cats[f] = {
  name: 'Frodo',
  age: 17,
};
cats[c] = {
  name: 'Corneel',
  age: 2,
};
console.log(cats);
console.log(Object.getOwnPropertySymbols(cats));

// Kanban Aigile Scrum Board
let statuses = {
  TO_DO: Symbol('To do'),
  IN_PROGRESS: Symbol('In progress'),
  READY_FOR_REVIEW: Symbol('Read for review'),
  FINISHED: Symbol('Finished'),
};

const task = {
  state: statuses.TO_DO,
  setState (state) {
    this.state = state;
  }
}
task.setState(statuses.IN_PROGRESS);
console.log(task);

/*
Spread
======
- notation: ...
- iterables like array, string ... to expand
*/
// Array literals
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const fruit = ['Apples', 'Oranges', 'Melons'];
const fruitTo = [...fruit];
fruitTo.push('Bananas');
console.log(fruitTo);

let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1 = [...arr1, ...arr2];
console.log(arr1);

// Spread in functions
let maxValue = Math.max(1, -2, 35, -19);
maxValue = Math.max(...[-1, 5, 67, 31]);
console.log(maxValue);

function sum (a, b, c) {
  return a + b + c;
};
let s = sum(1, 2, 3);
s = sum(...[1, 2, 3]);
console.log(s);

const dateFields = [1984, 12, 12];
const dayOfBirth = new Date(...dateFields);

// Spread in object literals
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 67 };
let clonedObject = {...obj1};
console.log(clonedObject);
let mergedObjects = {...obj1, ...obj2};
console.log(mergedObjects);

/*
Destructuring
=============
- elements of an array or properties in an object spread into different variables
- used in many modules
*/

// Array destructuring
const arr = ['first', 'second', 'third'];
const af = arr[0];
const as = arr[1];
const at = arr[2];

let ds, df, dt;
[df, ds, dt] = arr;
console.log(df, ds, dt);

const [,,st] = ['foo', 'bar', 'baz'];
console.log(st);

const [missing] = [];
console.log(missing);

// rest parameter
const [head, ...tail] = [1, 2, 3, 4];
console.log(tail);

const [x, ...y] = 'abcdefg';
console.log(x, y);

const [d = 3, e = d] = [7, null];
console.log(d, e);

/*
Object destructuring
*/
const person = {
  firstname: 'Philippe',
  lastname: 'De Pauw - Waterschoot'
};
const { firstname, lastname } = person;
console.log(firstname, lastname);

const project = {
  title: 'Let\'s pretend the 60\'s never happened',
  technologies: [
    'React',
  ]
};
const { title: name } = project;
console.log(name);

const { message = 'Something went wrong!'} = {};
console.log(message);

const options = {
  title: 'Menu',
  width: 200,
  height: 120,
};
const {title, ...dimension} = options;
console.log(dimension);

function whois ({ displayName, fullName }) {
  return `${displayName} is ${fullName}`;
}
console.log(whois({ fullName: 'Olivier Pieters' }));
const user = {
  fullName: 'Olivier Pieters',
  displayName: 'zweefje',
};
console.log(whois(user));