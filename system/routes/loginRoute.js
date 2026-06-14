const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) =>{
    
    const {email, password} = req.body;

    const sql = `
    SELECT *
    FROM users
    WHERE email = ?
    `;

    db.query(sql, [email], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        if(result.length === 0){
            return res.status(401).json({
                message: "User not found"
            });
        }

        const user = result[0];

        if(user.password !== password){
            return res.status(401).json({
                message: "Wrong password"
            });
        }

        res.json({
            message: "Login Success",
        });
    });
});

module.exports = router;