// Oefening 1
let fruits = ['Apple', 'Orange'];
const copiedFruits = [...fruits];

// Oefening 2
const arr1 = ['A', 'B'];
const arr2 = ['Y', 'Z'];
const result = [...arr1, ...arr2];

// Oefening 3
const newFruits = ['Cherry', ...fruits];

// Oefening 4
const obj1 = {
    id: 1,
    name: 'John'
};

const obj2 = {
    age: 25,
    country: 'USA',
}

const employee = {
    ...obj1,
    ...obj2
};

// Oefening 5
const obj3 = {
    age: 25,
    country: 'USA',
    ...obj1
}

// Extra
const add = (name, ...args) => {
    console.log(name, args.length);
};

add('Test', 6, new Date());

const combineTwoArrays = (arr1, arr2) => {
    console.log([...arr1, ...arr2]);
}

// combineTwoArrays(['A', 'B'], ['X', 'Z']);

const combineAllArrays = (...arrays)=> {
    // console.log(arrays.flat());
    const combinedArray = [];

    arrays.forEach((array) => {
        combinedArray.push(...array);
    });

    console.log(combinedArray);
}

combineAllArrays(['A', 'B',  'D'], ['L', 'M'], ['X', 'Y', 'Z']);