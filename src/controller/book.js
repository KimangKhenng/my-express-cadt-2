const asyncHandler = require('express-async-handler');
const { PaginationParameters } = require('mongoose-paginate-v2');
const BookModel = require('../models/book.js');
/**
 * Controller is a specific function to handle specific tasks
 */

const createBook = asyncHandler(async (req, res) => {
  const course = new BookModel(req.body);
  const result = await course.save();
  // Invalidate Cache
  // const { baseUrl } = req
  // const keys = await redisClient.keys(`${baseUrl}*`)
  // redisClient.del(keys[0])
  return res.json(result);
});

const getBookById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const course = await BookModel.findById(id);
  return res.json(course);
});

const getBooks = asyncHandler(async (req, res) => {
  // Intentionally make response 20s long
  // setTimeout(async () => {
  //     const options = new PaginationParameters(req).get()
  //     const books = await BookModel.paginate(...options)
  //     return res.json(books)
  // }, 20 * 1000)
  const options = new PaginationParameters(req).get();
  const books = await BookModel.paginate(...options);
  return res.json(books);
});

const deleteBookbyId = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await BookModel.deleteOne({ _id: id });
  return res.json(result);
});

const updateBookById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await BookModel.updateOne({ _id: id }, req.body);
  return res.json(result);
});

module.exports = {
  createBook,
  getBookById,
  getBooks,
  deleteBookbyId,
  updateBookById,
};
