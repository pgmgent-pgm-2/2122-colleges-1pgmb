/*
Import packages
*/
const express = require('express');

/*
Create an express.js application
*/
const app = express();

/*
Define the routes
*/
app.get('/', (req, res, next) => {
  res.send('HOME');
});

app.get('/hello', (req, res, next) => {
  res.send('HELLO WORLD');
});

const students = [
  {
    id: 1234,
    firstname: 'Evelien'
  },
  {
    id: 1221,
    firstname: 'Olivier'
  }
];

app.get('/api/students', (req, res, next) => {
  res.status(200).json(students);
});

app.get('/api/students/:studentId', (req, res, next) => {
  const { studentId } = req.params;
  const student = students.find((st) => {
    return st.id === parseInt(studentId);
  });
  if(!student) {
    res.status(404).json({
      message: `Student not found with id ${studentId}!`
    })
  } else {
    res.status(200).json(student);
  }  
});

/*
Host and Port
*/
const HOST = '127.0.0.1';
const PORT = 8080;

/*
Start the server (express application)
Listen to all incoming requests
*/
app.listen(PORT, HOST, (err) => {
  console.log(`Application started. Server is listening at ${HOST} on port ${PORT}.`);
});