const fs = require('fs');

const persons = [
  { firstName: 'Philippe', lastName: 'De Pauw - Waterschoot' },
  { firstName: 'Linus', lastName: 'De Pauw - Waterschoot' },
  { firstName: 'Lester', lastName: 'De Pauw - Waterschoot' }
];
const str = persons.map((p) => `${p.firstName} ${p.lastName}`).join('\n');
fs.writeFile('./persons.txt', str, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
