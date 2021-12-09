// function Person (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.greeting = function () {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting () {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

// Inheritance (Nl: overerving)
// A student is a person
class Student extends Person {
  #password = 'zwartelola';
  static type = 'STUDENT';
  constructor (firstName, lastName, studentId) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  greeting () {
    let message = super.greeting();
    message += `. I'm a student with id ${this.studentId}.`;
    return message;
  }

  get grade () {
    return this._grade;
  }

  set grade(newGrade) {
    this._grade = Math.round(newGrade);
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
}

let person = new Person('Evelien', 'De Pauw');
console.log(person.greeting());
person = new Student('Philippe', 'Rutsaert', 86743);
person.grade = 65.7;
console.log(person.greeting());
console.log(person.grade);
console.log(person._grade);
person.password = 'w84us';
console.log(person.password);
console.log(Student.type);