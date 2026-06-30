const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorController")
router.get("/", (req, res) => {
    res.json({
        message: "Service route working"
    });
});
router.post("/input/:patientId/:doctorId", doctorController.inputService);
module.exports = router;