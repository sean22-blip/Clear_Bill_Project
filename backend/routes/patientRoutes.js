const express = require("express");
const router = express.Router();

const {
    getDashboard
} = require("../controller/patientController");

router.get("/dashboard/:id", getDashboard);

module.exports = router;