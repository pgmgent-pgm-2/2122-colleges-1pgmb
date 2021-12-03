/*
Array Extended
==============
fill()
flat()
flatMap()
reduce()
*/
// fill() => give certain elements the same value
let arr = [1, 2, 3, 4];
console.log(arr.fill(5));
arr = [1, 2, 3, 4];
console.log(arr.fill(6, 3));
arr = [1, 2, 3, 4];
console.log(arr.fill(4, 1, 3));
arr = Array(12).fill(4);
console.log(arr);
arr = Array(12).fill({});
arr[0].hi = 'earthling';
console.log(arr);

// flat()
arr = [0, 1, 2, [3, 4]];
arr = arr.flat();
console.log(arr);
arr = [0, 1, 2, [[3, 4]]];
arr = arr.flat(2);
console.log(arr);
arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
arr = arr.flat(Infinity);
console.log(arr);
arr = [1, 2, , 4];
arr = arr.flat();
console.log(arr);

// flatMap => Map dan flat with depth 1
arr = ['it\'s sunny in', '', 'Ghent'];
arr = arr.flatMap(s => s.split(' '));
console.log(arr);

arr = [1, 2, -3, -4, 5];
arr = arr.flatMap(number => {
  return number < 0 ? [] : [number];
});
console.log(arr);

arr = [
  { id: 1, username: 'wildernismeisje', tags: ['bomen', 'bloemen', 'apen'] },
  { id: 2, username: 'tarzan', tags: ['koorden', 'apen'] }
];
const tags = arr.flatMap(user => user.tags);
console.log(tags);
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags);

// Reduce
const reduced = [1, 2, 3, 4, 5].reduce((prev, next) => {
  return prev + next;
}, 0);
console.log(reduced);