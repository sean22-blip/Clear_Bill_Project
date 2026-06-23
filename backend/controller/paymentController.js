const { Payment, Bill } = require("../models");

exports.getPayments = async (req, res) => {
    try {

        const payments = await Payment.findAll({
            include: [{
                model: Bill,
                where: {
                    patient_id: req.params.patientId
                }
            }]
        });

        res.json(payments);

    } catch (error) {
        res.status(500).json(error);
    }
};