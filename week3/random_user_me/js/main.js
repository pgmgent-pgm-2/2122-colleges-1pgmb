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

        getJSONByPromise(RANDOM_USER_ME_API)
          .then((data) => {
            const users = data.results;
            this.$usersList.innerHTML = users.map((user) => {
            return `
            <article>
              <h3>${user.name.first} ${user.name.last}</h3>
            </article>
            `;
            }).join('');
          })
          .catch((error) => {

          });
    }
  }
  app.init();
})();