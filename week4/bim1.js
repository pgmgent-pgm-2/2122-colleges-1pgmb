/*
process

global object (import not needed)
process.env (all the enviroment variables / properties)
*/
console.log(process.env);
// Add Hello as a env variable
process.env.Hello = 'Greetings Earthlings';
console.log(process.env.Hello);
// Exit the Node.js Runtime
// process.on('exit', (code) => {
//   console.log(`About to exit with code: ${code}`);
// });

/*
console

global object (import not needed)
*/

/*
readline

not global object (import needed)
Read the line inputted by the user
*/
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
readlineInterface.question('What\'s your name? ', name => {
  console.log(name);
  readlineInterface.close();
});