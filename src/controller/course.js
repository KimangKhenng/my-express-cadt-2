const CourseModel = require('../models/course.js')
const asyncHandler = require('express-async-handler')

/**
 * Controller is a specific function to handle specific tasks
 */

const createCourse = asyncHandler(async (req, res) => {
    const course = new CourseModel(req.body)
    const result = await course.save()
    return res.json(result)
})

const getCourseById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const course = await CourseModel.findById(id)
    return res.json(course)
})

const getCourses = asyncHandler(async (req, res) => {
    // Get all courses 
    const courses = await CourseModel.find()
    return res.json(courses)
})

const deleteCoursebyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await CourseModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateCourseById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await CourseModel.updateOne({ ...req.body, id })
    return res.json(result)
})

module.exports = {
    createCourse,
    getCourseById,
    getCourses,
    deleteCoursebyId,
    updateCourseById
}