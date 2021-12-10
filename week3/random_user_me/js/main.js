const RANDOM_USER_ME_API = `https://randomuser.me/api/?results=100`;

(() => {
  const app = {
    init() {
      this.cacheElements();
      this.getDataFromRandomUserMeAPIEndpoint();
      this.updateUI();
    },
    cacheElements() {
      this.$usersList = document.querySelector('.users-list');
    },
    updateUI() {

    },
    getDataFromRandomUserMeAPIEndpoint() {
      const self = this; // Scope of a variable this
      // getJSON(RANDOM_USER_ME_API,
      //   function (data) {
      //     const users = data.results;
      //     self.$usersList.innerHTML = users.map((user) => {
      //       return `
      //       <article>
      //         <h3>${user.name.first} ${user.name.last}</h3>
      //       </article>
      //       `;
      //     }).join('');
      //   },
      //   function(error) {
      //     console.log(error);
      //   });

        // getJSONByPromise(RANDOM_USER_ME_API)
        //   .then((data) => {
        //     const users = data.results;
        //     this.$usersList.innerHTML = users.map((user) => {
        //     return `
        //     <article>
        //       <h3>${user.name.first} ${user.name.last}</h3>
        //     </article>
        //     `;
        //     }).join('');
        //   })
        //   .catch((error) => {

        //   });

        // 3. Fetching data with fetch
        // const rumPromise = fetch(RANDOM_USER_ME_API, {});
        // rumPromise
        //   .then((response) => response.json())
        //   .then((data) => {
        //     const users = data.results;
        //     this.$usersList.innerHTML = users.map((user) => {
        //     return `
        //     <article>
        //       <h3>${user.name.first} ${user.name.last}</h3>
        //     </article>
        //     `;
        //     }).join('');
        //   })
        //   .catch((error) => console.log(error));
        this.asyncLoadExternalData();

        this.asyncManipulateExternalDataFromPlaceholderAPI();
    },
    async asyncLoadExternalData() {
      try {
        const response = await fetch(RANDOM_USER_ME_API, {});
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }      
    },
    async asyncManipulateExternalDataFromPlaceholderAPI() {
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let data = await response.json();
        console.log(data);

        response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        data = await response.json();
        console.log(data);

        data = {
          title: 'Graduaat Programmeren',
          body: 'Like Graphics Love Code Make Cool Stuff',
          userId: 3
        };

        response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8'},
          body: JSON.stringify(data)
        });
        data = await response.json();

        data = {
          id: 1,
          title: 'Graduaat Programmeren',
          body: 'Super like Graphics Love Code Make Cool Stuff',
          userId: 3
        };
        response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json; charset=UTF-8'},
          body: JSON.stringify(data)
        });
        data = await response.json();

        response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
          method: 'DELETE'
        });
        data = await response.json();
        console.log(data);

        if (true) {
         throw new Error('IT IS BROKEN'); 
        }

      } catch(error) {
        console.error(error);
      }
    }
  }
  app.init();
})();