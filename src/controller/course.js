const CourseModel = require('../models/course.js')

/**
 * Controller is a specific function to handle specific tasks
 */

async function createCourse(req, res) {
    const newCourse = {
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
    }

    const course = new CourseModel(newCourse)
    const result = await course.save()
    return res.json(result)
}

function getCourseById(req, res) {
    const id = req.params.id
    const course = courses.find((item) => {
        return item.id == id
    })
    return res.json(course)
}

async function getCourses(req, res) {
    // Get all courses 
    const courses = await CourseModel.find()
    return res.json(courses)
}

function deleteCourse(req, res) {
    const id = req.params.id
    const course = courses.find((item) => {
        return item.id == id
    })
    if (course) {
        const index = courses.findIndex((item) => {
            return item == course
        })
        console.log(index)
        courses.splice(index, 1)
        return res.json({
            operation: "deleted",
            item: course
        })
    }
    return res.json("Course not found")
}

module.exports = { createCourse, getCourseById, getCourses, deleteCourse }