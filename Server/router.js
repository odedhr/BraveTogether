const express = require('express');
const router = express.Router();
const { User } = require('./models');
const { Hero } = require('./models');

router.post('/user', async (req, res) => {
  try {
    var user = await User.create(req.body);
  } catch (err) {
    res.send({
      error: true,
      message: `Error happened during user creation: ${err.message}`
    });
  }

  res.send({
    message: 'User successfully stored',
    user: user
  });
});

router.post('/hero', async (req, res) => {
  try {
    var hero = await Hero.create(req.body);
  } catch (err) {
    res.send({
      error: true,
      message: `Error happened during hero creation: ${err.message}`
    });
  }

  res.send({
    message: 'Hero successfully stored',
    hero: hero
  });
});

module.exports = router;