const express = require('express');
const api = express();
const router = require('./router');

api.use(express.json());

api.use('/api/v1', router);

api.listen(3001, err => {
  if (err) {
    return console.log('Error happened while starting the server: ', err);
  }

  console.log('Application started on port 3001...');
});