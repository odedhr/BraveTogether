const creds = require('../../config/sheets.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const create = async () => {
  const doc = new GoogleSpreadsheet('1faQ3RpYZhCftCX4yDFbtEdtd7DkG6hkI2Ce2-jeC3bs');

  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0];
  await sheet.setHeaderRow([
    'first_name',
    'last_name',
    'email',
    'cellphone',
    'has_criminal_record',
    'has_committed_to_privacy',
    'is_approved'
  ]);
}

create()