const prcs = require('process');
const {write} = require('./files');

const [,,fileName] = prcs.argv;
write(fileName);