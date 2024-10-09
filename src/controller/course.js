const courses = require('../models/course.js')

/**
 * Controller is a specific function to handle specific tasks
 */

function createCourse(req, res) {
    const newCourse = {
        id: req.body.id,
        title: req.body.title,
    }
    const exist = courses.some((item) => {
        return item.id == newCourse.id
    })
    if (exist) {
        return res.status(400).json({
            message: "Course ID already existt"
        })
    }
    courses.push(newCourse)
    return res.json({
        operation: "Success",
        item: newCourse
    })
}

function getCourseById(req, res) {
    const id = req.params.id
    const course = courses.find((item) => {
        return item.id == id
    })
    return res.json(course)
}

function getCourses(req, res) {
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