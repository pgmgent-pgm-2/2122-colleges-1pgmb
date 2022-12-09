const cookingPot = {
    material: 'Metaal',
    price: 125,
    size: {
        diameter: 30,
        height: 25
    },
    owners: ['Mama', 'Papa']
}
const material = 'Ijzer';
const {price, material: mat, size, size: {diameter, height}, owners: [, secondOwner]} = cookingPot;

// console.log(material, mat, price, size, diameter, height, secondOwner);

// const material = cookingPot.material;
// const price = cookingPot.price;
// const size = cookingPot.size;
// const diameter = cookingPot.size.diameter;
// const height = cookingPot.size.height;

const sizes = {
    BIG: Symbol('Big'),
    SMALL: Symbol('Small')
};
const drawChart = (size = sizes.BIG, {x, y} = {x: 0, y: 0}, radius = 50) => {
    // Size (Default should be sizes.BIG)
    // Coordinates (Default should be x = 0 and y = 0)
    // Radius (Default should be 50%);
    console.log(size, `De x-coördinaat is ${x} en het y-coördinaat is ${y}`, radius);
};

drawChart(undefined, {x: 20, y: 60});


const {message, code} = {
    message: 'Er is iets misgegaan.',
    code: '502'
};

console.log(message, code);