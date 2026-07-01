const express = require("express");
const router = express.Router();
const {getService} = require("../controller/serviceController")
router.get("/:id", getService);

module.exports = router;