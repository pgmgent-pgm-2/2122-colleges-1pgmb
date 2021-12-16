class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  toCLIStr() {
    return `My name is ${this.firstname} ${this.lastname}.`;
  }
}
module.exports = User;