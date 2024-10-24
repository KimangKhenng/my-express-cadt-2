const express = require('express')
const { handleUpload, getFile, handleUploads, handleS3Upload } = require('../controller/file')
const { singleUpload, multipleUploads } = require('../middlewares')
const uploadS3 = require('../middlewares/uploadS3')
const fileRouter = express.Router()

fileRouter.post('/upload-single', singleUpload, handleUpload)
fileRouter.post('/upload-single-s3', uploadS3, handleS3Upload)
fileRouter.post('/upload-multiple', multipleUploads, handleUploads)
fileRouter.get('/:id', getFile)

module.exports = fileRouter