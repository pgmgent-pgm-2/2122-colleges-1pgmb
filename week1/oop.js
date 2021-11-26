function User({ firstname, lastname, age }) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.roles = [];
  this.sayHello = () => {
    return `Hi! My name is ${this.firstname} ${this.lastname}`;
  }
  this.addRole = (role) => {
    if (this.roles.findIndex((e) => e === role) == -1) {
      this.roles.push(role);
    }    
  }
}
let user = new User({ firstname: 'Evelien', lastname: 'Selie', age: 36 });
user.addRole('contentmanager');
console.log(user.sayHello());
user = new User({ firstname: 'Philippe', lastname: 'De Pauw', age: 31 });
user.addRole('contentmanager');
user.addRole('contentmanager');
user.addRole('administrator');
console.log(user);

// Describe a blueprint for ParkingGarage
function ParkingGarage({name, totalCapacity, availableCapacity}) {
  this.name = name;
  this.availableCapacity = availableCapacity;
  this.totalCapacity = totalCapacity;
  this.calcFreePercentage = () => {
    return Math.round(this.availableCapacity / this.totalCapacity * 100);
  }
  this.toEasyCLIString = () => {
    return `${this.name}\t${this.availableCapacity} van ${this.totalCapacity} (${this.calcFreePercentage()}%)`;
  }
}

const parkings = [];
let parking = new ParkingGarage({
  name: 'Vrijdagmarkt',
  availableCapacity: 234,
  totalCapacity: 632
});
parkings.push(parking);
parking = new ParkingGarage({
  name: 'Sint-Pietersplein',
  availableCapacity: 389,
  totalCapacity: 708
});
parkings.push(parking);

const output = `
==============================================
|       Realtime Ghent Parking States        |
==============================================
${parkings.map((g) => g.toEasyCLIString()).join('\n')}
==============================================
`;
console.log(output);