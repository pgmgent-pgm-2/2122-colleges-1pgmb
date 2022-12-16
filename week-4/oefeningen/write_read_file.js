const prcs = require('process');
const {write, read} = require('./files');

const [,,fileName, textContent] = prcs.argv;
write(fileName, textContent, read(fileName));
