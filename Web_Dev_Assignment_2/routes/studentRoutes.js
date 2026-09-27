const express = require('express');
const router = express.Router();
let students = require('../data/students');

/**
 * @route   GET /students
 * @desc    Retrieve and return the full list of students
 * @access  Public
 */
router.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
});

/**
 * @route   GET /students/:id
 * @desc    Find and return a single student by ID
 * @access  Public
 */
router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid student ID format. ID must be an integer.'
    });
  }

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${studentId} not found.`
    });
  }

  return res.status(200).json({
    success: true,
    data: student
  });
});

/**
 * @route   POST /students
 * @desc    Create a new student (requires name and course)
 * @access  Public
 */
router.post('/', (req, res) => {
  const { name, course, email } = req.body;

  // Validation: require name and course
  if (
    !name ||
    !course ||
    typeof name !== 'string' ||
    typeof course !== 'string' ||
    name.trim() === '' ||
    course.trim() === ''
  ) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. "name" and "course" are required non-empty string fields.'
    });
  }

  // Generate a unique ID (maximum existing ID + 1, or 1 if empty)
  const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

  const newStudent = {
    id: newId,
    name: name.trim(),
    course: course.trim(),
    ...(email && typeof email === 'string' ? { email: email.trim() } : {})
  };

  students.push(newStudent);

  return res.status(201).json({
    success: true,
    message: 'Student registered successfully.',
    data: newStudent
  });
});

/**
 * @route   PUT /students/:id
 * @desc    Find student by ID and update fields provided in request body
 * @access  Public
 */
router.put('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid student ID format. ID must be an integer.'
    });
  }

  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${studentId} not found.`
    });
  }

  const { name, course, email } = req.body;

  // Validate fields if provided
  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({
        success: false,
        message: '"name" must be a non-empty string when provided.'
      });
    }
    students[studentIndex].name = name.trim();
  }

  if (course !== undefined) {
    if (typeof course !== 'string' || course.trim() === '') {
      return res.status(400).json({
        success: false,
        message: '"course" must be a non-empty string when provided.'
      });
    }
    students[studentIndex].course = course.trim();
  }

  if (email !== undefined) {
    students[studentIndex].email = typeof email === 'string' ? email.trim() : email;
  }

  return res.status(200).json({
    success: true,
    message: `Student with ID ${studentId} updated successfully.`,
    data: students[studentIndex]
  });
});

/**
 * @route   DELETE /students/:id
 * @desc    Remove student by ID from the array
 * @access  Public
 */
router.delete('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid student ID format. ID must be an integer.'
    });
  }

  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with ID ${studentId} not found.`
    });
  }

  const [deletedStudent] = students.splice(studentIndex, 1);

  return res.status(200).json({
    success: true,
    message: `Student with ID ${studentId} deleted successfully.`,
    data: deletedStudent
  });
});

module.exports = router;
