const express = require('express');
const postRoutes = require('./routes/posts');
const clientRoutes = require('./routes/pages');
const parser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
const PORT = 8080;
const HOST = 'localhost';

const app = express();
app.use(parser.json());

app.use('/', clientRoutes);
app.use('/api/posts', postRoutes);

nunjucks.configure(path.join(__dirname, '..', 'client'), {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true,
});

app.set('view engine', 'html');
app.use('/static', express.static(path.join(__dirname, '..', 'client', 'static')));

app.listen(PORT, HOST, (err) => {
    if (err) {
        throw new Error('Er is iets foutgelopen met de server');
    }

    console.log( `De server is aan het luisteren op http://${HOST}:${PORT}.`);
});