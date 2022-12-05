const getData = () => {

}

function OldPerson(first, last, age = 25) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.sayHallo = () => {
        return `Hallo, ik ben ${this.firstName}, en mijn achternaam is ${this.lastName}`;
    }
}

class Person {
    constructor (first, last, age = 'Leeftijd niet ingesteld') {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    sayHallo () {
        return `Hallo, ik ben ${this.firstName}, en mijn achternaam is ${this.lastName}`;
    }
}

class President extends Person {
    #secretSociety = 'Illuminati';

    constructor (first, last, age, country, angry = true) {
        super(first, last, age);
        this.country = country;
        this.isAngry = angry;
    }

    sendRocket(destination) {
        return console.log(`Send nuclear codes to ${destination}`);
    }
}

const teacher = new Person('Adriaan', 'Glibert', 28);
const student = new Person('Yordi', 'Vandenbroecke');
const directeur = new Person('Mark', 'Verbeke');

const usaPresident = new President('Joe', 'Biden', 86, 'USA', true);
const turkeyPresident = new President('Rijeb', 'Erdogan', 75, 'Turkey');

if (usaPresident.isAngry) {
    usaPresident.sendRocket('Mars');
}

let user = {
    name: 'Jan',
    lastName: 'Modaal'
}

// const adriaan = Object.definePropery(user, 'name', {
//     value: 'Adriaan'
// });