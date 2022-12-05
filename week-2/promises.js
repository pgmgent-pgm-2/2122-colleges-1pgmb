const isSuccesfull = true;

const normalFunction = () => {
    if (isSuccesfull) {
        setTimeout(() => {
            return 'Dit is een succes';
        }, 1000);
    } else {
        return 'Dit is een fout';
    }
}

console.log(normalFunction());

const functionToLearnPromises = () => {
    return new Promise((resolve, reject) => {
        if (isSuccesfull) {
            resolve('Data die we krijgen bij de then methode')
        } else {
            reject('Data die we krijgen bij de catch methode')
        }
    });
};

functionToLearnPromises()
.then(resolveData => {
    console.log(resolveData);
})
.catch(rejectData => {
    console.log(rejectData);
});