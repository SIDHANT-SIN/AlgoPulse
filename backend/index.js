const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
require("dotenv").config();
require("./contestUpdation/cron");

const allowedOrigins = ["https://algopulse-site.netlify.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

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
