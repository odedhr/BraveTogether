const express = require('express');
const router = express.Router();
const translate = require('@vitalets/google-translate-api');

router.post('/translate', (req, res) => {
  translate(req.body.text, {from: 'he', to: 'en'}).then(result => {
      res.send({
        original: req.body.text,
        translation: result.text
      });
  }).catch(err => {
      console.error(err);
  });
});

module.exports = router;