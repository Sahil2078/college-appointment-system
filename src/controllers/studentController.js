const Student = require('../models/studentModel')


exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(201).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}