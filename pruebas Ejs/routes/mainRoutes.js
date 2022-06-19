const express = require("express");
const mainController = require("../controllers/mainController.js");
const router = express.Router();

router.get("/", mainController.index);
router.get("/detail/:menuId", mainController.detail);
module.exports = router;
