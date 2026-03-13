const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  start: {
    type: Date,
    required: true
  },

  end: {
    type: Date,
    required: true
  },

  isBooked: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Availability", availabilitySchema);