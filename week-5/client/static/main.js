(() => {
    const app = {
        initialize() {
            console.log('Mijn applicatie is geladen');
            this.POST_API = 'http://localhost:8080/api/posts';
            this.cacheElements();
            this.fetchArticles();
            this.registerEventListeners();
        },
        cacheElements() {
            this.$newsArticlesList = document.getElementById('news-articles');
            this.$newsForm = document.getElementById('news-form');
        },
        registerEventListeners() {
            this.$newsForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const postData = {};
                const formData = new FormData(this.$newsForm);
                for (const [key, value] of formData) {
                    postData[key] = value;
                }

                try {
                    await fetch(this.POST_API, {
                        method: 'POST',
                        body: JSON.stringify(postData),
                        headers: {'Content-type': 'application/json; charset=UTF-8'}
                    });

                    alert('We hebben iets gepost!');
                } catch {
                    alert('Er is iets misgegaan');
                }
            })
        },
        async fetchArticles() {
            const response = await fetch(this.POST_API);

            if (response.status == 200) {
                const data = await response.json();
                this.renderHTMLForArticlesList(data);
                const $delButtons = this.$newsArticlesList.querySelectorAll('button');
                $delButtons.forEach($button => {
                    $button.addEventListener('click', async () => {
                        console.log($button);
                        await fetch(`${this.POST_API}/${$button.dataset.id}`, {
                            method: 'DELETE'
                        });
                        alert('Deleted post!');
                    })
                })
            }
        },
        renderHTMLForArticlesList(articles) {
            this.$newsArticlesList.innerHTML = articles.map(article => {
                return `<li>${article.title} ${article.description} <button data-id="${article.id}">Delete!</button></li>`;
            }).join('<hr>');
        },
    };

    app.initialize();
})();