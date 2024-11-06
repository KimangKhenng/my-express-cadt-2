
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.js')
const redisClient = require('../redis/index.js')
const { PaginationParameters } = require('mongoose-paginate-v2');

/**
 * Controller is a specific function to handle specific tasks
 */

const createUser = asyncHandler(async (req, res) => {
    const course = new UserModel(req.body)
    const result = await course.save()
    // Invalidate Cache
    // const { baseUrl } = req
    // const keys = await redisClient.keys(`${baseUrl}*`)
    // redisClient.del(keys[0])
    return res.json(result)
})

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const course = await UserModel.findById(id)
    return res.json(course)
})

const getUsers = asyncHandler(async (req, res) => {
    const options = new PaginationParameters(req).get()
    const users = await UserModel.paginate(...options)
    return res.json(users)
})

const deleteUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUserById,
    updateUserById
}