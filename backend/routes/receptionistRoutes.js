const express = require("express");
const router = express.Router();

const { getReceptionist,createPatient } = require("../controller/receptionistController");

router.get("/:id", getReceptionist);
router.post("/:id/create", createPatient)

module.exports = router;