const fs = require('fs');

const writeFile = (fileName, textContent, callback) => {
    fs.writeFile(fileName, textContent, (err) => {
        if(err) throw new Error(err);
        callback;
    });
}

const readFile = (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err) throw new Error(err);

        console.log('De inhoud van je bestand is: ', data);
    })
}

module.exports = {
    write: writeFile,
    read: readFile
}