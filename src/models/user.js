const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true, default: Date.now() }
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel