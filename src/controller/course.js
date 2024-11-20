const asyncHandler = require('express-async-handler');
const CourseModel = require('../models/course.js');
const redisClient = require('../redis/index.js');

/**
 * Controller is a specific function to handle specific tasks
 */

const createCourse = asyncHandler(async (req, res) => {
  const course = new CourseModel(req.body);
  const result = await course.save();
  // Invalidate Cache
  // const { baseUrl } = req
  // const keys = await redisClient.keys(`${baseUrl}*`)
  // redisClient.del(keys[0])
  return res.json(result);
});

const getCourseById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const course = await CourseModel.findById(id);
  return res.json(course);
});

const getCourses = asyncHandler(async (req, res) => {
  const options = new PaginationParameters(req).get();
  const courses = await CourseModel.paginate(...options);
  return res.json(courses);
});

const deleteCoursebyId = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await CourseModel.deleteOne({ _id: id });
  return res.json(result);
});

const updateCourseById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const result = await CourseModel.updateOne({ _id: id }, req.body);
  // const result = await CourseModel.findByIdAndUpdate(id, req.body)
  return res.json(result);
});

module.exports = {
  createCourse,
  getCourseById,
  getCourses,
  deleteCoursebyId,
  updateCourseById,
};
