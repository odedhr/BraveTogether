const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../config/sheets.json');
const doc = new GoogleSpreadsheet('1faQ3RpYZhCftCX4yDFbtEdtd7DkG6hkI2Ce2-jeC3bs');

// const initializeSpreadsheet = async () => {
//   await doc.useServiceAccountAuth({
//     client_email: creds.client_email,
//     private_key: creds.private_key,
//   });
//   await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0];

//   await sheet.setHeaderRow('first_name last_name email cellphone has_criminal_recordb has_committed_to_privacy is_approved');
// };

// initializeSpreadsheet();

module.exports = {
  addRow: async (data) => {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
  
    await sheet.setHeaderRow('first_name last_name email cellphone has_criminal_recordb has_committed_to_privacy is_approved');

    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
    await doc.loadInfo();
    console.log(sheet);
    await sheet.addRow({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      cellphone: data.cellphone,
      has_criminal_record: data.has_criminal_record,
      has_committed_to_privacy: data.has_committed_to_privacy,
      is_approved: data.is_approved,
    });
  }
};
