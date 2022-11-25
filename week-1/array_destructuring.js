const firstName = 'Brecht';
const getUsers = () => {};
const users = ['Jan', 'Piet', 'Joris', 'Korneel'];
const students = ['Maarten', 'Nikita', 'Brecht', 'Kyandro'];
// const firstUser = users[0];
// const secondUser = users[1];
// const thirdUser = users[2];
// const fourthUser = users[3];

const [firstUser, secondUser, thirdUser, fourthUser] = users;
// const secondStudent = students[1];
// const thirdStudent = students[2];
// const [,secondStudent, thirdStudent] = students;
// const [,secondStudent,,fourthStudent, fifthStudent] = students;
const [,secondStudent,...otherStudents] = students;
// console.log(secondStudent, otherStudents);

const maarten = [25, 'Bruin haar', 'Man'];
const [age, hairColor, gender, brand = 'Unknown brand'] = maarten;

const brands = ['Adidas', 'Nike', 'Reebok'];
const brandsCollection = brands.entries();
// console.log(brandsCollection.next());

for (const [, brandName] of brandsCollection) {
    // const [,brandName] = brand;
    console.log(brandName);
}