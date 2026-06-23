const express = require("express");
const router = express.Router();

const { getPayments } = require("../controller/paymentController");

router.get("/patient/:patientId", getPayments);

module.exports = router;