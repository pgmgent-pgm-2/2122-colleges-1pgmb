// Fetch returnt Promises.

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    return response.json();
})
.then(posts => {
    console.log(posts);
})
.catch(err => {
    alert(err);
});

// Oefening!

// Kies zelf een van de 212 datasets van open data Gent en toon zinnige resultaten op de HTML pagina.