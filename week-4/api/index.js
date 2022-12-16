const express = require('express');
const beers = require('./data/beers.json');
const app = express();

app.get('/api/beers', (request, response) => {
    response.json(beers);
});

app.get('/api/beers/:id', (request, response) => {
    const {id} = request.params;
    const detailedBeer = beers.find(beer => {
        return beer.id === parseInt(id);
    });

    response.json(detailedBeer);
});

app.post('/beers', () => {});

app.listen(3000, () => {
    console.log('De server staat aan!');
});