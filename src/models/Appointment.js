const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);