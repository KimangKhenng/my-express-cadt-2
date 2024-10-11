
const asyncHandler = require('express-async-handler')
const BookModel = require('../models/book.js')

/**
 * Controller is a specific function to handle specific tasks
 */

const createBook = asyncHandler(async (req, res) => {
    const course = new BookModel(req.body)
    const result = await course.save()
    return res.json(result)
})

const getBookById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const course = await BookModel.findById(id)
    return res.json(course)
})

const getBooks = asyncHandler(async (req, res) => {
    // Get all courses 
    const courses = await BookModel.find()
    return res.json(courses)
})

const deleteBookbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await BookModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateBookById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await BookModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createBook,
    getBookById,
    getBooks,
    deleteBookbyId,
    updateBookById
}