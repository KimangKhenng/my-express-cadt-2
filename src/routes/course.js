const express = require('express')
const { createCourse, getCourseById, getCourses, deleteCourse } = require('../controller/course.js')
const router = express.Router();

router.post('/', createCourse)
router.get('/', getCourses)
router.get('/:id', getCourseById)
router.delete('/:id', deleteCourse)

module.exports = router