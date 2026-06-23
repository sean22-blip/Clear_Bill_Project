const { Bill } = require("../models");

exports.getPatientBills = async (req, res) => {
    try {

        const bills = await Bill.findAll({
            where: {
                patient_id: req.params.patientId
            }
        });

        res.json(bills);

    } catch (error) {
        res.status(500).json(error);
    }
};