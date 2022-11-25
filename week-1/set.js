const users = new Set();
users.add('pussyslayer');
users.add('getrekt');
users.add('getrekt');
users.delete('getrekt');
const hasGetRekt = users.has('getrekt');
// console.log(users, hasGetRekt);

const cars = ['Mercedes', 'Ferrari', 'Ferrari', 'BMW'];
const carsSet = new Set(cars);
const uniqueCars = [...carsSet];
console.log(carsSet, uniqueCars);