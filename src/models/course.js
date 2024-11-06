const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const courseSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    createdDate: { type: Date, required: true, default: new Date() },
})

courseSchema.plugin(mongoosePaginate)

const CourseModel = mongoose.model('Courses', courseSchema)

module.exports = CourseModel