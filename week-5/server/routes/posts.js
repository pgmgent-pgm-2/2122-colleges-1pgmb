const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const postFilePath = path.join(__dirname, '..', 'data', 'posts.json');

const getCurrentPostFromFile = () => {
    return JSON.parse(fs.readFileSync(postFilePath, {encoding: 'utf-8', flag: 'r'}));
}

router.get('/', (request, response) => {
    response.status(200).json(getCurrentPostFromFile());
});

router.post('/', (request, response) => {
    const p = getCurrentPostFromFile();
    request.body.id = uuidv4();
    request.body.createdAt = Date.now();
    p.push(request.body);
    fs.writeFileSync(postFilePath, JSON.stringify(p));

    response.status(200).json({
        status: 200,
        message: `Er is succesvol een post toegevoegd met id ${request.body.id}!`
    });
})

router.get('/:id', (request, response) => {
    const {id} = request.params;
    const post = getCurrentPostFromFile().find(post => post.id === id);
    response.status(200).json(post);
});

router.delete('/:id', (request, response) => {
    const {id} = request.params;
    const filteredPosts = getCurrentPostFromFile().filter(post => {
        return post.id !== id;
    });

    fs.writeFileSync(postFilePath, JSON.stringify(filteredPosts));
    response.status(200).json({
        status: 200,
        message: `Post met id ${id} is succesvol verwijderd.`
    })
})

router.put('/:id', (request, response) => {
    const p = getCurrentPostFromFile();
    const {id} = request.params;

    const indexOfReplacedPost = p.findIndex(post => post.id == id);

    p[indexOfReplacedPost] = {
        ...p[indexOfReplacedPost],
        ...request.body
    };

    fs.writeFileSync(postFilePath, JSON.stringify(p));
    response.status(200).json({
        status: 200,
        message: `Post met id ${id} is succesvol aangepast.`
    })
})

module.exports = router;