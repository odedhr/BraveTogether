const { Event } = require("../models");
const axios = require("axios");

module.exports = {
  fetchAll: async (req, res) => {
    const content = {
      error: false,
      message: "Events successfully fetched",
    };

    try {
      var items = [];
      const events = await Event.findAll({ include: ["hero", "manager"] });

      await Promise.all(events.map(async (eventItem) => {
        let eventApi = await axios.get(`http://localhost:5000/events/${eventItem.dataValues.event_id}`, {
          auth: {
            username: req.body.token,
            password: "",
          },
        });
        items.push({
          ...eventItem.dataValues,
          ...eventApi.data
        })
      }));

      content.events = items;

      res.send(content);
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }
  },
  fetchOne: async (req, res) => {
    const content = {
      error: false,
      message: `Event with id #${req.params.id} successfully fetched`,
    };

    try {
      const event = await Event.findOne({ where: { event_id: req.params.id }, raw: true },
        {
          include: ["hero", "manager"],
        }
      );
      let eventApi = await axios.get(`http://localhost:5000/events/${event.event_id}`, {
        auth: {
          username: req.body.token,
          password: "",
        },
      });
      content.event = {
        ...event,
        ...eventApi.data
      };
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  create: async (req, res) => {
    console.log(req.body);
    try {
      var apiEvent = await axios.post(
        "http://127.0.0.1:5000/events",
        {
          tags: req.body.tags,
          title: req.body.title,
          description: req.body.description,
          start_time: req.body.start_time,
          end_time: req.body.end_time,
          reward: req.body.reward,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: req.body.token,
            password: "",
          },
        }
      );

      var event = await Event.create({
        ...req.body,
        event_id: apiEvent.data.id,
      });

      const mergedEvent = {
        ...apiEvent.data,
        ...event.dataValues
      }

      res.status(201).send({
        error: false,
        message: 'Event successfully added',
        event: mergedEvent
      });
    } catch (err) {
      console.log(err);
      res.send({
        error: true,
        message: err.response.data.message,
      });
    }
  },
};
