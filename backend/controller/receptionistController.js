const { Payment, Bill, Patient, User } = require("../models");

exports.getReceptionist = async (req, res) => {

    try {

        const receptionist = await User.findOne({
            where: {
                user_id: req.params.id,
            }
        })
        if (!receptionist) {
            return res.status(404).json({ error: `receptionist cannot be found!` })
        }
        res.json(receptionist);
    } catch (error) {
        console.log("There is an error in receptionistController" + error);
        res.status(500).json(error);
    }
};
exports.createPatient = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json("All field must be provided!");
        }
       const newPatient =  await User.create({name, email, password, role: 'Patient'});
       return res.status(201).json({message: `successfully created new Patient`, data: newPatient})
    } catch (error) {
        console.log(`There is an error inside receptionistController: ${error}`)
        return res.status(500).json({error: error.message}
        )
    }
}