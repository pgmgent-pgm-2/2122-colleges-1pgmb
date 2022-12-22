const express = require('express');
const postRoutes = require('./routes/posts');
const parser = require('body-parser');
const PORT = 8080;
const HOST = 'localhost';

const app = express();
app.use(parser.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, HOST, (err) => {
    if (err) {
        throw new Error('Er is iets foutgelopen met de server');
    }

    console.log( `De server is aan het luisteren op http://${HOST}:${PORT}.`);
})