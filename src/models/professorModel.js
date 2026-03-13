const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  availableSlots: [
    {
      date: String,
      time: String
    }
  ]
});

module.exports = mongoose.model("Professor", professorSchema);