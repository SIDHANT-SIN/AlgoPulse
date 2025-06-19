const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: { type: String },
    phase: { type: String },
    relativeStart: { type: Number },
    startTime: { type: Date },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Contest", contestSchema);
