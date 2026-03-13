const express = require("express");
const router = express.Router();

const {
  addProfessor,
  getProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
  addSlot,
  addAvailability,
  getAvailability
} = require("../src/controllers/professorController");


router.post("/add", addProfessor);

router.get("/", getProfessors);

router.get("/:id", getProfessorById);

router.put("/:id", updateProfessor);

router.delete("/:id", deleteProfessor);

router.post("/add-slot", addSlot);

router.post("/availability", addAvailability);

router.get("/:id/availability", getAvailability);


module.exports = router;