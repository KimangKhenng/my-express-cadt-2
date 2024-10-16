const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const UserModel = require('../models/user')

const signUp = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) {
        throw new Error("Password not matched!")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const username = Date.now() + firstname

    const user = new UserModel({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
    })

    const result = await user.save()
    delete result.password
    return res.json(result)
})

module.exports = { signUp }