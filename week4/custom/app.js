const uppercaseModule = require('./uppercase');
console.log(uppercaseModule.uppercase('We Like Graphics Love Code'));
console.log(uppercaseModule.a, uppercaseModule.b);

const User = require('./user');
console.log(new User('Flappie', 'Bird').toCLIStr());