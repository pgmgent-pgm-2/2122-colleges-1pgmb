const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

// exports.m = multiply;
// exports.d = divide;

module.exports = {
    m: multiply,
    d: divide
}

// module.exports = multiply;