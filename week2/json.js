/*
JSON
====
JavaScript Object Notation
Simular with an Object Literal
Alternative to XML
Mime type: application/json
------------------------------
{
  key1: value1,
  key2: value2
}

of

[
  {
    key1: value1,
    key2: value2
  }
]
*/

// Describe a person as an object literal
const person = {
  firstName: 'Philippe',
  lastName: 'De Pauw',
  666: 'The Devil',
  'quote': 'Learning By Doing',
  toString: function() {
    return `Hi! My Name is ${this.firstName}.`;
  }
}
console.log(person.toString());
// Convert an object to a json-string
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
const objectPerson = JSON.parse(jsonPerson);
console.log(objectPerson);

const jStr = `
{
  "name": "Vegan City",
  "geoLocation": {
    "lat": 3.7,
    "lng": 51
  }
}
`;
const objJStr = JSON.parse(jStr);
console.log(objJStr);

/* JSONP
JSON with padding
Manner to get data from another domain
without execute CORS-rules
http://example.com/data.json?callback=de

In JavaScript
function de() {

}
*/

// Create an URL object based on an URL string
const url = 'https://www.bol.com/be/nl/s/?page=1&searchtext=sla&view=list&filter_N=4287655559&rating=all';

const objURL = new URL(url);
console.log(objURL);
console.log(objURL.hostname);

const pgmURL = 'http://www.pgm.gent/students?class=pgm1#a';
const objPGMURL = new URL(pgmURL);
console.log(objPGMURL.pathname);
objPGMURL.pathname = 'lecturers';
objPGMURL.protocol = 'https';
console.log(objPGMURL.href);

const googlePastinaakURL = `https://www.google.be/search?q=pastinaak&sxsrf=AOaemvIDjAvhAeYlqe3sOmSq0El-nOCjww%3A1638453391344&source=hp&ei=j9CoYYrrEYy4lwSEz4KoCg&iflsig=ALs-wAMAAAAAYajen0Fzupwu0bkrpzd42T7zwN4KDzrQ&ved=0ahUKEwjK7vnCosX0AhUM3IUKHYSnAKUQ4dUDCAY&uact=5&oq=pastinaak&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BOgcIIxDqAhAnOgQIIxAnOg4ILhCABBCxAxDHARCjAjoLCC4QgAQQsQMQgwE6CAguELEDEIMBOg4ILhCABBCxAxDHARCvAToOCC4QgAQQsQMQxwEQ0QM6CwgAEIAEELEDEIMBOgsIABCABBCxAxDJAzoFCAAQkgNQ1CBYjy1g0S5oAXAAeACAAYgBiAGiBpIBAzguMZgBAKABAbABCg&sclient=gws-wiz`;
const objGooglePastinaak = new URL(googlePastinaakURL);
console.log(objGooglePastinaak.searchParams);