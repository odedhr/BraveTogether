const express = require('express');
const router = express.Router();
const controller = require('../controllers/events');

router.get('/', controller.fetchAll)
      .post('/:id', controller.fetchOne)
      .post('/', controller.create);

module.exports = router;