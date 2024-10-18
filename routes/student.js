const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addStudent, getStudents, deleteStudent } = require('../controllers/studentController');

router.post('/', auth, addStudent);
router.get('/', auth, getStudents);
router.delete('/:id',auth, async (req, res) => {
    try {
      const deletedStudent = await deleteStudent(req.params.id);
      res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
      if (error.message === 'Student not found') {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.status(500).json({ error: 'An error occurred while deleting the student' });
      }
    }
  });
  
module.exports = router;
