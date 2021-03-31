const { User } = require("../models");

module.exports = {
  fetchAll: async (req, res) => {
    const content = {
      error: false,
      message: "Users successfully fetched",
    };

    try {
      const usersAPI = []; // TODO: fetch users from api
      const users = await User.findAll({ include: ["heroes"] });
      // TODO: mapper that will merge the two arrays by user_id
      content.users = users;
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  fetchOne: async (req, res) => {
    const content = {
      error: false,
      message: `User with id #${req.params.id} successfully fetched`,
    };

    try {
      const userAPI = null; // TODO: fetch user from api
      const user = await User.findOne(
        { where: { user_id: req.params.id } },
        {
          include: ["heroes"],
        }
      );
      // TODO: mapper that will merge the two user data objects
      content.user = user;
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  create: (req, res) => {
    User.create({
      ...req.body,
      // image: req.file.path
    })
      .then((user) => {
        res.status(201).send({
          error: false,
          message: "User successfully added",
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
