/*
Import packages
*/
const express = require('express');

/*
Create an express.js application
*/
const app = express();

/*
Start the server (express application)
Listen to all incoming requests
*/
app.listen(8080, '127.0.0.1', (err) => {
  if (err) throw err;
  console.log(`Application started. Server is listening at ${'127.0.0.1'} on port ${8080}.`);
});