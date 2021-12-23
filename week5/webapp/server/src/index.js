/*
External libraries
Set of custom modules
*/
const express = require('express');

/*
Internal libraries
Custom self-made modules
*/
const publicRoutes = require('./routes');
const apiRoutes = require('./api/routes');
const { HTTPError } = require('./utils');

// Create the express application
const app = express();

// Assign the routers to the express application
app.use('/', publicRoutes);
app.use('/api', apiRoutes);

/*
Handling non existing routes
*/
app.get('*', (req, res, next) => {
  const error = new HTTPError(`${req.ip} tried to access ${req.originalUrl}.`, 301);
  next(error);
});

app.use((error, req, res, next) => {
  // res.send(error);
  res.json({
    url: req.originalUrl,
    err: {
      message: error.message,
      statusCode: error.statusCode
    }
  });
  next();
});

// Define the server settings
const HOST = '127.0.0.1';
const PORT = 8080;

// Listening to incoming requests and respond to it
app.listen(PORT, HOST, (err) => {
  console.log(`Server is running and listening at http://${HOST}:${PORT}`);
});