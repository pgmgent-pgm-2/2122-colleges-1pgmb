// Define the endpoint / url to load from
let url = 'http://api.icndb.com/jokes/random';
// 1. Make an instance of XMLHttpRequest
let xmlHttp = new XMLHttpRequest();
// 1bis. Listen to the changes in the tunnel / connection
xmlHttp.onreadystatechange = function () {
  switch (xmlHttp.readyState) {
    case 0: console.log('UNSENT'); break;
    case 1: console.log('OPENED'); break;
    case 2: console.log('HEADERS RECEIVED'); break;
    case 3: console.log('LOADING'); break;
    case 4: default: 
      console.log('LOADED'); 
      // If status is 200 then everything is aok
      if (xmlHttp.status) {
        console.log('200 OK');
        const data = JSON.parse(xmlHttp.response);
        console.log(data);
        const $chuckNorrisElement = document.querySelector('.chuck-norris');
        $chuckNorrisElement.dataset.id = data.value.id;
        $chuckNorrisElement.innerHTML = `
        <p class="joke">${data.value.joke}</p>
        `
      }
      break;
  }
}
// 2. Open the connection or tunnel to the resource on the url
xmlHttp.open('GET', url, true);
// 3. Make the request to the specified resource
xmlHttp.send(null);