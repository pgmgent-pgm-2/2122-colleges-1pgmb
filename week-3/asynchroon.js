// let x = 0;

// const foo = () => {
//     foo();
// }

// foo();

// const add = (a, b) => {
//     while (x < 1000000000000000000) {
//         x++;
//     }
//     return a + b;
// }

// const average = (x, y) => {
//     return add(x, y) / 2;
// }

// const sum = add(1, 2);
// const av = average(2, 8);

// // avergage()


// const task = (message) => {
//     let n = 10000000000;
//     while (n > 0) {
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');
// setTimeout(() => {
//     task('Downloaded a file.');
// }, 3000);
// console.log('Done!');

const hetWerkt = true;

const belofte = new Promise((functieDieDataTeruggeeftAlsHetWerkt, functieDieDataTeruggeeftAlsHetMislukt) => {
    if (hetWerkt) {
        functieDieDataTeruggeeftAlsHetWerkt('Beloftwaarde als het lukt.');
    } else {
        functieDieDataTeruggeeftAlsHetMislukt({
            message: 'Er is iets misgegaan.',
            code: '502'
        });
    }
});

belofte
.then(zin => {
    console.log(zin);
})
.catch(({code}) => {
    console.log(code);
})
.finally(() => {
    console.log('Klaar met mijn belofte uit te voeren.');
});

doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);