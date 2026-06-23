 
// const sequelize = require("./config/db");
// const express = require("express");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const patientRoutes = require("./routes/patientRoutes");
// const billRoutes = require("./routes/billRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/patient", patientRoutes);
// app.use("/api/bills", billRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/payments", paymentRoutes);
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database Connected");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// app.listen(5000, () => {
//   console.log("Server is ronning on port 5000");
// });

const sequelize = require("./config/db");

sequelize.authenticate()
.then(() => {
    console.log("Database Connected");
})
.catch(err => {
    console.error("Database Error:", err);
});