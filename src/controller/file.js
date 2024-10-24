const asyncHandler = require("express-async-handler");
const FileModel = require("../models/file");
const path = require('path')

const handleUpload = asyncHandler(async (req, res) => {
    const file = new FileModel(req.file)
    file.save()
    return res.json(file)
})

const getFile = asyncHandler(async (req, res) => {
    const id = req.params.id
    const file = await FileModel.findById(id)
    return res.sendFile(path.join(__dirname, "./../../" + file.path))
})
module.exports = { handleUpload, getFile }