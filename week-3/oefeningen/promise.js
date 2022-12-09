const job = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello world');
        }, 5000);
    });
}

// job().then((mess) => {
//     console.log(mess);
// });

const isOddNumber = (number) => {
    return new Promise((res, rej) => {
        if (typeof number !== 'number') {
            rej('Het is geen getal');
        }

        if(number % 2) {
            setTimeout(() => {
                res('Yes, het getal is oneven!');
            }, 2000);
        } else {
            setTimeout(() => {
                rej('Het is een even getal.')
            }, 1000);
        }
    });
};

// isOddNumber(198698361962)
// .then(msg => {
//     console.log(msg);
// })
// .catch(msg => {
//     console.log(msg);
// });

const logNumber = async (n) => {
    try {
        const result = await isOddNumber(n);
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

// logNumber(5);

const userId = 'user-1';
const data = [{name: 'Website development', type: 'UX Design'}];

const signIn = () => {
    return new Promise((res, rej) => {
        if (userId) {
            setTimeout(() => {
                res(userId);
            }, 1000);
        } else {
            rej(new Error('Kon user niet aanmelden.'));
        }
    });
};

const getData = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Get data from user', user);
            resolve(data);
        }, 10000);
    })
};

const renderDashboard = (data) => {
    console.log('Ik render mijn dashboard met data:', data)
};

signIn()
.then((user) => {
    return getData(user);
})
.then((data) => {
    renderDashboard(data);
});

const init = async () => {
    try {
        const user = await signIn();
        const data = await getData(user);
        renderDashboard(data);
    } catch (e) {
        console.log(e.message);
    }
}
