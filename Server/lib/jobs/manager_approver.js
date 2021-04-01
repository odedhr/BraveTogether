const creds = require('../../config/sheets.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { User } = require('../../models');
const sendMail = require('../mailer')

module.exports = {
  work: async () => {
    const doc = new GoogleSpreadsheet('1faQ3RpYZhCftCX4yDFbtEdtd7DkG6hkI2Ce2-jeC3bs');

    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    rows.forEach(async row => {
      if (row['is_approved'].toLowerCase() == 'true' && row['is_manager'].toLowerCase() == 'false') {
        await User.update({ is_manager: true }, {
          where: { 
            email: row['email']
          }
        });
        row['is_manager'] = true
        await row.save()
        sendMail({
          email: row['email'],
          subject: 'Your application is approved!',
          text: 'We are happy to approve your application!'
        });
        console.log(`User with email ${row['email']} is now a manager!`);
      }
    })
  }
}