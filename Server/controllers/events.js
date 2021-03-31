const { Event } = require('../models');
const axios = require('axios');

module.exports = {
  create: async (req, res) => {
    try {
      var apiEvent = await axios.post('http://127.0.0.1:5000/events', {
        tags: req.body.tags,
        title: req.body.title,
        description: req.body.description,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        reward: req.body.reward
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: auth = {
          username: req.body.token,
          password: ''
        }
      });

      var event = await Event.create(req.body);

      res.status(201).send({
        error: false,
        message: 'Event successfully added',
        api_event: apiEvent ? apiEvent.data : {},
        event: event
      });
    } catch (err) {
      console.log(err);
      res.send({
        error: true,
        message: err.response.data.message
      });
    }
  }
};