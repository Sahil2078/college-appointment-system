const Professor = require("../models/professorModel");
const Availability = require("../models/Availability");


exports.addProfessor = async (req, res) => {
  try {
    const { name, department, email } = req.body;

    const professor = new Professor({
      name,
      department,
      email
    });

    const savedProfessor = await professor.save();

    res.status(201).json({
      message: "Professor added successfully",
      data: savedProfessor
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.getProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.getProfessorById = async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);

    if (!professor) {
      return res.status(404).json({
        message: "Professor not found"
      });
    }

    res.json(professor);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.updateProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Professor updated successfully",
      professor
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.deleteProfessor = async (req, res) => {
  try {
    await Professor.findByIdAndDelete(req.params.id);

    res.json({
      message: "Professor deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



exports.addSlot = async (req, res) => {
  try {
    const { professorId, slot } = req.body;

    const professor = await Professor.findById(professorId);

    if (!professor) {
      return res.status(404).json({
        message: "Professor not found"
      });
    }

    professor.availableSlots.push(slot);

    await professor.save();

    res.json({
      message: "Slot added successfully",
      professor
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.addAvailability = async (req, res) => {
  try {

    const professorId = req.body.professor;
    const start = req.body.start;
    const end = req.body.end;

    const availability = new Availability({
      professor: professorId,
      start: start,
      end: end
    });

    const savedAvailability = await availability.save();

    res.status(201).json({
      message: "Availability slot created",
      data: savedAvailability
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};


exports.getAvailability = async (req, res) => {
  try {

    const slots = await Availability.find({
      professor: req.params.id,
      isBooked: false
    });

    res.json(slots);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};