const express = require('express');
const router = express.Router();
const posts = require('../data/posts.json');
const fs = require('fs');
const path = require('path');

const postFilePath = path.join(__dirname, '..', 'data', 'posts.json');

router.get('/', (request, response) => {
    response.status(200).json(posts);
});

router.post('/', (request, response) => {
    // Hey, voeg data toe aan de post file!
    posts.push(request.body);
    fs.writeFileSync(postFilePath, JSON.stringify(posts));

    response.status(200).json({
        status: 200,
        message: `Er is succesvol een post toegevoegd met id ${request.body.id}!`
    });
})

router.get('/:id', (request, response) => {
    const {id} = request.params;
    const post = posts.find(post => post.id === id);
    response.status(200).json(post);
});

module.exports = router;