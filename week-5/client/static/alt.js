console.log('Mijn applicatie is geladen');
const $newsArticlesList = document.getElementById('news-articles');
console.log($newsArticlesList);

const fetchArticles = async () => {
    const response = await fetch(this.POST_API);

    if (response.status == 200) {
        return await response.json();
    }
};

const renderHTMLForArticlesList = (articles) => {
    $newsArticlesList.innerHTML = articles.map(article => {
        return `<li>${article.title}</li>`;
    }).join('<hr>');
};

const getArticles = async () => {
    const data = await fetchArticles();
    renderHTMLForArticlesList(data);
};

getArticles();