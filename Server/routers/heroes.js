const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroes');
const upload = require('../lib/upload');

router.get('/', controller.fetchAll)
      .get('/:id', controller.fetchOne)
      .post('/', upload.single('image'), controller.create);

module.exports = router;