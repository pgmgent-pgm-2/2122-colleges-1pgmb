// https://www.photos.google.be:8080/vakantie-2022?human=true&name=rasul#3
// https: Protocol
// www: submain
// photos: subdomain
// google: domain
// .be: extensie
// port: :8080
// vakantie-2022: path
// query: human=true&name=rasul
// #3: hash of target

const myUrl = new URL('https://www.photos.google.be:8080/vakantie-2022?human=true&name=rasul#3');
myUrl.searchParams.append('sunny', 'true');
myUrl.searchParams.set('human', 'false');
console.log(myUrl);

const newUrl = new URL('https://bol.com');
const newParams = new URLSearchParams('sort=price&rating=5');
newUrl.search = newParams;
console.log(newUrl);
