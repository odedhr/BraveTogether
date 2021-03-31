const { Hero, User } = require("../models");

module.exports = {
  fetchAll: async (req, res) => {
    const content = {
      error: false,
      message: "Heroes successfully fetched",
    };

    try {
      console.log(req.query.manager_id);
      if (req.query.manager_id) {
        const manager = await User.findByPk(req.query.manager_id, {
          include: ["heroes"],
        });
        content.message = `Fetching heroes for manager with id #${req.query.manager_id}`;
        content.heroes = manager.heroes;
      } else {
        const heroes = await Hero.findAll({ include: ["manager"] });
        content.heroes = heroes;
      }
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  fetchOne: async (req, res) => {
    const content = {
      error: false,
      message: `Hero with id #${req.params.id} successfully fetched`,
    };

    try {
      const hero = await Hero.findByPk(req.params.id, { include: ["manager"] });
      content.hero = hero;
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  create: (req, res) => {
    Hero.create({
      ...req.body,
      // image: req.file.path
    })
      .then((user) => {
        res.send({
          error: false,
          message: "Hero successfully added",
          user,
        });
      })
      .catch((err) => {
        res.send({
          error: true,
          message: err.message,
        });
      });
  },
};
