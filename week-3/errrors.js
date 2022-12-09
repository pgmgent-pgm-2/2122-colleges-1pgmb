const getName = (name) => {
    if (name) {
        return `Mijn naam is ${name}`;
    } else {
        throw new Error('Er is geen name meegegeven.');
    }
}

try {
    getName();
} catch(err) {
    console.log(err.message);
}