const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    createdDate: { type: Date, required: true, default: Date.now() },
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel