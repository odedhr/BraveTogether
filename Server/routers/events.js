const express = require('express');
const router = express.Router();
const controller = require('../controllers/events');

router.post('/', controller.create);

module.exports = router;