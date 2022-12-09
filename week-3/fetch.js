const getData = async (url) => {
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Er is iets misgegaan bij het ophalen van je data');
    }
}

async () => {
    const data = await getData('https://random-data-api.com/api/v2/beers');
    console.log(data);
}

getData('https://random-data-api.com/api/v2/beers')
.then(beers => {
    console.log(beers);
})

getData('https://random-data-api.com/api/v2/users')
.then(users => {
    console.log(users);
})

Promise.all([getData('https://random-data-api.com/api/v2/beers'), getData('https://random-data-api.com/api/v2/users')]).then((values) => {
    console.log(values);
})

try {
    const beers = getData('https://random-data-api.com/api/v2/beers');
    const users = getData('https://random-data-api.com/api/v2/users');

    console.log(beers, users)
} catch (e) {
    console.log(e.message);
}

// GET
// POST
// PUT -- vervang je volledige object
// PATCH -- enkel bepaalde properties veranderen
// DELETE

const postUser = async () => {
    return await fetch('https://random-data-api.com/api/v2/beers', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Maarten',
            age: 25,
            strength: 'Gespierd'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
}