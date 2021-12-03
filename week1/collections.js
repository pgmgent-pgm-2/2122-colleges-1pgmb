/* 
Keyed collections
=================
- Set
- WeakSet
- Map
- WeakMap
*/

// Set
let mySet = new Set();
console.log(mySet);
mySet.add(1);
mySet.add(1);
mySet.add('pgm');
mySet.add('Pgm');
mySet.add(true);
console.log(mySet);
console.log(mySet.size);
let obj = {
  firstname: 'Philippe'
};
mySet.add(obj);
mySet.add(obj);
mySet.add({ firstname: 'Philippe'});
console.log(mySet.has('pgm'));
mySet.delete('Pgm');
console.log(mySet);

// Array naar Set
const arr = [1, 1, 2, 2, 3, 4, 5, 5];
mySet = new Set(arr);
const newArr = [...mySet];
console.log(newArr);

//String naar Set
const chars = 'zijbrengtrozenopgeritsgrafbijvuilgrijsweder';
mySet = new Set(chars);
const newStr = [...mySet].join('');
console.log(newStr);

// WeakSet

// Map
const students = new Map();
students.set(680543, { firstName: 'Olivier'});
students.set(680543, { firstName: 'Evelien'});
students.set(640563, { firstName: 'Adriaan'});
students.set(690549, { firstName: 'Veli'});
console.log(students.size);
let student = students.get(680543);
console.log(student);
console.log(students.has(640563));
console.log(students);

students.forEach((value, key) => {
  console.log(key, value);
});

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

const merged = new Map([...first, ...second]);
console.log(merged);

// Advanced Array Methods
// Array.from() 
let resArr = Array.from('jane');
console.log(resArr);
resArr = Array.from(new Map([[1, 2], [2, 4], [4, 8]]));
console.log(resArr);

const arrLikeObject = {
  0: 'Hello',
  1: 'World',
  length: 3,
};

resArr = Array.from(arrLikeObject);
console.log(resArr);
console.log(Array.from([1, 2, 3], x => x + x));

resArr = ['a', 'b', 'c'];
const itr = resArr.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

for (let [i, elem] of resArr.entries()) {
  console.log(`[${i}, ${elem}]`);
}

// every()
const arr2 = [1, 30, 66, 45, 4, 9];
console.log(arr2.every(e => e < 80));