const { User } = require("../models");
const axios = require("axios");

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
  create: async (req, res) => {
    // TODO: Sync with the API
    try {
      var apiUser = await axios.post(
        "http://127.0.0.1:5000/user",
        {
          email: req.body.email,
          password: req.body.password,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          cellphone: req.body.cellphone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      var user = await User.create({
        ...req.body,
        user_id: apiUser.data.id,
        image: req.file ? req.file.path : null,
      });

      res.send({
        error: false,
        message: "User successfully added",
        api_user: apiUser ? apiUser.data : {},
        user: user,
      });
    } catch (err) {
      res.send({
        error: true,
        message: err.response.data.message,
      });
    }
  },
};
