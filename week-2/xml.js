
const getDataFromFile = (file) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.responseType = 'json';

        request.addEventListener('readystatechange', () => {
            // 0 - Verzoek nog niet gestuurd
            // 1 - Connectie is geopend
            // 2 - Headers ontvangen
            // 3 - Ik ben aan het laden
            // 4 - Succesvol geladen
            switch (request.readyState) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:default:
                    if (request.status === 200) {
                        resolve(request.response);
                    } else {
                        reject('Er is iets misgegaan');
                    }
                    break;
            }
        });

        request.open('GET', file);
        request.send();
    });
}



getDataFromFile('./students.json')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('Dit is het einde van het verzoek.')
});
