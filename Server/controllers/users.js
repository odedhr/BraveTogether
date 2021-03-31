<<<<<<< HEAD
const { User } = require("../models");
const axios = require("axios");
=======
const { User } = require('../models');
const axios = require('axios');
// const Spreadsheet = require('../lib/spreadsheets');
// const { addRow } = require('../lib/spreadsheets');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../config/sheets.json');
const doc = new GoogleSpreadsheet('1faQ3RpYZhCftCX4yDFbtEdtd7DkG6hkI2Ce2-jeC3bs');

// const addRow2 = async (req) => {
//   await doc.useServiceAccountAuth({
//     client_email: creds.client_email,
//     private_key: creds.private_key,
//   });
//   const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });
//   console.log(sheet)
//   const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
//   const moreRows = await sheet.addRows([
//     { name: 'Sergey Brin', email: 'sergey@google.com' },
//     { name: 'Eric Schmidt', email: 'eric@google.com' },
//   ]);
  // const sheet = doc.sheetsByIndex[0];
  // await sheet.setHeaderRow('x y z')
  // await sheet.setHeaderRow(['first_name', 'last_name', 'email', 'cellphone']);
  // await doc.useServiceAccountAuth({
  //   client_email: creds.client_email,
  //   private_key: creds.private_key,
  // });
  // await doc.loadInfo();
  // console.log(req.body.first_name)
  // await sheet.addRow({
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   email: req.body.email,
  //   cellphone: req.body.cellphone,
  //   has_criminal_record: req.body.has_criminal_record,
  //   has_committed_to_privacy: req.body.has_committed_to_privacy,
  //   is_approved: req.body.is_approved
  // });
// }
>>>>>>> Add events code

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
<<<<<<< HEAD
    // TODO: Sync with the API
    console.log(req.body);
=======
>>>>>>> Add events code
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

<<<<<<< HEAD
      res.send({
=======
      // if (req.body.has_applied_for_manager) {
      //   addRow2({
      //     first_name: req.body.first_name,
      //     last_name: req.body.last_name,
      //     email: req.body.email,
      //     cellphone: req.body.cellphone,
      //     has_criminal_record: req.body.has_criminal_record,
      //     has_committed_to_privacy: req.body.has_committed_to_privacy,
      //     is_approved: false
      //   });
      // }
    
      res.status(201).send({
>>>>>>> Add events code
        error: false,
        message: "User successfully added",
        api_user: apiUser ? apiUser.data : {},
        user: user,
      });
    } catch (err) {
<<<<<<< HEAD
      res.send({
        error: true,
        message: err.response.data.message,
      });
=======
      console.log(err)
      // res.send({
      //   error: true,
      //   message: err.response.data.message
      // });
>>>>>>> Add events code
    }
  },
};
