const asyncHandler = require("express-async-handler");
const FileModel = require("../models/file");
const path = require('path')

const handleUpload = asyncHandler(async (req, res) => {
    const file = new FileModel(req.file)
    file.save()
    return res.json(file)
})

const handleUploads = asyncHandler(async (req, res) => {
    // const file = new FileModel(req.file)
    // file.save()
    const files = req.files
    return res.json(files)
})

const handleS3Upload = asyncHandler(async (req, res) => {
    console.log(req.file)
    return res.json(req.file)
})


const getFile = asyncHandler(async (req, res) => {
    const id = req.params.id
    const file = await FileModel.findById(id)
    return res.sendFile(path.join(__dirname, "./../../" + file.path))
})
module.exports = { handleUpload, getFile, handleUploads, handleS3Upload }