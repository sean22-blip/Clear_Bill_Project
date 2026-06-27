const express = require("express");
const router = express.Router();

const { getCashier } = require("../controller/cashierController");

router.get("/:id", getCashier);

module.exports = router;