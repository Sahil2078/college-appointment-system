const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor"
  },
  date: {
    type: Date,
    required: true
  },
  reason: {
    type: String
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);