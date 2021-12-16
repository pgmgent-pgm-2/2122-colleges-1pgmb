/*
path

not a global object so import needed
*/
const path = require('path');
let fileName = path.win32.basename('C:\\temp\\code\\file.txt');
console.log(fileName);
fileName = path.win32.basename('C:\\temp\\code\\file.txt', '.txt');
console.log(fileName);
fileName = path.posix.basename('/temp/code/file.txt');
console.log(fileName);
console.log(process.env.PATH);