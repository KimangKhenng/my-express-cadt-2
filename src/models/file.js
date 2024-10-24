const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    originalname: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true },
    key: { type: String, required: true },
    mimetype: { type: String, required: true },
    encoding: { type: String, required: true },
    createdDate: { type: Date, required: true, default: new Date() },
    etag: { type: String, required: true }
})

const FileModel = mongoose.model('Files', fileSchema)

module.exports = FileModel