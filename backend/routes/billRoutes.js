const express = require("express");
const router = express.Router();
const { getPatientBills } = require("../controller/billController");

router.get("/patient/:patientId", getPatientBills);

module.exports = router;