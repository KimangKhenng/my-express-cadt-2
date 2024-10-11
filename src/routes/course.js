const express = require('express')
const {
    createCourse,
    getCourseById,
    getCourses,
    deleteCourse,
    updateById
} = require('../controller/course.js')
const router = express.Router();

router.post('/', createCourse)
router.get('/', getCourses)
router.get('/:id', getCourseById)
router.delete('/:id', deleteCourse)
router.put('/:id', updateById)

module.exports = router