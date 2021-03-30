const express = require('express');
const router = express.Router();
const { User } = require('./models');

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

module.exports = router;