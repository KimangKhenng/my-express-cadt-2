const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    price: { type: Number },
    title: { type: String },
    category: { type: String },
    author: { type: String }
})

const CourseModel = mongoose.model('Courses', courseSchema)

module.exports = CourseModel