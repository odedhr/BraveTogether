const { Event } = require('../models');

module.exports = {
  create: (req, res) => {
    // TODO: ping api event create route
    Event.create(req.body)
      .then(event => {
        res.status(201).send({
          error: false,
          message: 'Event successfully created',
          event
        });
      })
      .catch(err => {
        res.send({
          error: true,
          message: err.message
        });
      });
  }
};