const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../config/sheets.json');

module.exports = {
  addRow: async (data) => {
    const doc = new GoogleSpreadsheet('1faQ3RpYZhCftCX4yDFbtEdtd7DkG6hkI2Ce2-jeC3bs');
  
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(data)
  }
};
