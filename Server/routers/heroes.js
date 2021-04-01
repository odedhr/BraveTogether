const express = require("express");
const router = express.Router();
const controller = require("../controllers/heroes");
const upload = require("../lib/upload");

router.get("/", controller.fetchAll).get("/:id", controller.fetchOne).post("/", controller.create);
// upload.single('image'),
module.exports = router;
