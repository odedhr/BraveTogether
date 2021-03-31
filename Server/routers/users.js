const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const upload = require('../lib/upload');

router.get('/', controller.fetchAll)
      .get('/:id', controller.fetchOne)
      .get('/by-email/:email', controller.fetchOneByEmail)
      .post('/', upload.single('image'), controller.create);

module.exports = router;