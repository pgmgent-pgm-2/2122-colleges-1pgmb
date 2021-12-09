/*
Promises
========
- Afhandelen van asynchrone operaties
- Alternatief voor callbacks
- Voordelen:
  - Code leesbaarder
  - Betere afhandeling van asynchrone operaties
  - Betere controle over de flow
  - Betere foutafhandeling
*/
const promise = new Promise((resolve, reject) => {
  resolve();
  //reject();
});
// promise.then(
//   () => {
//     console.log('SUCCESS => SMARTPHONE');
//   },
//   () => {
//     console.log('ERROR => BAD BOY')
//   }
// );
promise
  .then(() => console.log('SUCCESS => SMARTPHONE'))
  .catch(() => console.log('ERROR => BAD BOY'));

// Smartphone
const isDadHappy = true;
const willIGetASmartphone = new Promise(
  (resolve, reject) => {
    if (isDadHappy) {
      resolve({
        brand: 'Xiaomi',
        color: 'Gradient Green to Blue'
      });
    } else {
      reject('No phone for you! Dad is not Happy!')
    }
  }
);

const showOff = function (smartphone) {
  return new Promise(
    (resolve, reject) => {
      const message = `Hey friend, I have a new ${smartphone.color} ${smartphone.brand} phone.`;
      resolve(message);
    }
  )
};

willIGetASmartphone
  .then((smartphone) => showOff(smartphone))
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => console.log('Do generic stuff.'));