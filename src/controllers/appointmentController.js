const Appointment = require("../models/Appointment");
const Availability = require("../models/Availability");



exports.bookAppointment = async (req, res) => {
  try {

    const { studentName, studentEmail, professorId, date, time, topic } = req.body;

    
    const existingAppointment = await Appointment.findOne({
      professorId,
      date,
      time
    });

    if (existingAppointment) {
      return res.status(400).json({
        message: "This time slot is already booked"
      });
    }

    const appointment = new Appointment({
      studentName,
      studentEmail,
      professorId,
      date,
      time,
      topic
    });

    const savedAppointment = await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: savedAppointment
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getAppointments = async (req, res) => {
  try {

    const appointments = await Appointment
      .find()
      .populate("professorId");

    res.json(appointments);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




exports.cancelAppointment = async (req, res) => {
  try {

    const deletedAppointment = await Appointment.findById(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({
        message: "Appointment not found"
      });
    }

    await Appointment.findByIdAndDelete(req.params.id);

  res.json({
      message: "Appointment cancelled successfully",
      appointment: deletedAppointment
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};