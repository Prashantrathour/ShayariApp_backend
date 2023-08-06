// models/shayari.js
const mongoose = require("mongoose");

const shayariSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shayari = mongoose.model("Shayari", shayariSchema);

module.exports = Shayari;
