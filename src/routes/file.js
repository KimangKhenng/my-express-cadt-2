const express = require('express')
const { handleUpload, getFile } = require('../controller/file')
const { singleUpload } = require('../middlewares')
const fileRouter = express.Router()

fileRouter.post('/upload-single', singleUpload, handleUpload)
fileRouter.get('/:id', getFile)

module.exports = fileRouter