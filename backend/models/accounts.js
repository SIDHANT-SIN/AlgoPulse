const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    default: "Unrated",
  },
  title: {
    type: String,
    default: "None",
  },
});

module.exports = mongoose.model("Account", accountSchema);
