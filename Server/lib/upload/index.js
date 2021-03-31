const multer = require('multer');
const { storage, fileFilter, limits } = require('./provider')

module.exports = multer({
  storage,
  fileFilter,
  limits
});
