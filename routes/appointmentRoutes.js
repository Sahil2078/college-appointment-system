
const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  cancelAppointment
} = require("../src/controllers/appointmentController");



router.post("/book", bookAppointment);

router.get("/", getAppointments);

router.delete("/:id", cancelAppointment);


module.exports = router;