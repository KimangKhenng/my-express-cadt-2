const express = require('express')
const { handleUpload, getFile, handleUploads } = require('../controller/file')
const { singleUpload, multipleUploads } = require('../middlewares')
const fileRouter = express.Router()

fileRouter.post('/upload-single', singleUpload, handleUpload)
fileRouter.post('/upload-multiple', multipleUploads, handleUploads)
fileRouter.get('/:id', getFile)

module.exports = fileRouter