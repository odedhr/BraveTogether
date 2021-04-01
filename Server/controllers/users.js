const { User } = require("../models");
const axios = require("axios");
const Spreadsheet = require("../lib/spreadsheets");
const sendMail = require("../lib/mailer");

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
      const user = await User.findOne(
        {
          where: {
            user_id: req.params.id,
          },
          raw: true,
        },
        { include: ["heroes"] }
      );

      if (!user) throw new Error(`User with id #${req.params.id} does not exist`);

      const response = await axios(`http://localhost:5000/user/${req.params.id}`);

      content.user = {
        ...user,
        ...response.data,
      };
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  fetchOneByEmail: async (req, res) => {
    const content = {
      error: false,
      message: `User with email #${req.params.email} successfully fetched`,
    };

    try {
      const user = await User.findOne(
        {
          where: {
            email: req.params.email,
          },
          raw: true,
        },
        { include: ["heroes"] }
      );

      if (!user) throw new Error(`User with email #${req.params.email} does not exist`);

      const response = await axios(`http://localhost:5000/user/${user.user_id}`);

      content.user = {
        ...user,
        ...response.data,
        is_manager: true,
      };
    } catch (error) {
      content.error = true;
      content.message = error.message;
    }

    res.send(content);
  },
  create: async (req, res) => {
    var mailText = "You have successfully registered your account!";

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

      req.body.is_manager = false;
      var user = await User.create({
        ...req.body,
        user_id: apiUser.data.id,
        image: req.file ? req.file.path : null,
      });

      if (req.body.has_applied_for_manager == "true") {
        Spreadsheet.addRow({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          cellphone: req.body.cellphone,
          has_criminal_record: req.body.has_criminal_record,
          has_committed_to_privacy: req.body.has_committed_to_privacy,
          is_manager: false,
          is_approved: false,
        });

        mailText =
          "You applied for being a manager. We will let you know once your application is approved.";
      }

      sendMail({
        email: req.body.email,
        subject: "Welcome to Heredo!",
        text: mailText,
      });

      res.status(201).send({
        error: false,
        message: "User successfully added",
        user: {
          ...apiUser.data,
          ...user.dataValues,
        },
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
