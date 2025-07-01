const express = require("express");
// const http = require("http");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
//const Account = require("./models/accounts");
//
app.use(cors());
app.use(express.json());
require("dotenv").config();
require("./contestUpdation/cron");



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));


const accountRoutes = require("./routes");
app.use("/api/accounts", accountRoutes);

const contestRoutes = require("./contestRoutes");
app.use("/api/contests", contestRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
