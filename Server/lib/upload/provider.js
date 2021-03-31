const multer = require('multer');
const MAX_SIZE = 1024 * 1024 * 5; // 5MB

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: MAX_SIZE 
  }
};