const person = {};
const arguments = process.argv.slice(2);
arguments.forEach((argument, index) => {
  const splitted = argument.split('=');
  person[splitted[0]] = splitted[1];
});
console.log(person);

// {
//   firstname: 'Philippe'
//   ...
// }