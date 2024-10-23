const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')

const signUp = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } = req.body
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
    console.log(typeof (result))
    result.password = ''
    return res.json(result)
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email: email })
    if (!user) {
        return res.status(404).json("User not found!")
    }
    const compareResult = await bcrypt.compare(password, user.password)
    if (!compareResult) {
        return res.status(401).json("Incorrect email or password")
    }
    // Sign JWT Token
    const token = jwt.sign(
        { id: user._id, email: user.email, username: user.username },
        process.env.JWT_SECRET, { expiresIn: '1h' }
    )
    return res.json({ token })
})

const handleGoogle = asyncHandler(async (req, res) => {
    const query = req.query
    console.log(query)
    return res.json(query)
})

const showGoogleOAuth = (req, res) => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URL}&response_type=code&scope=profile%20email&access_type=offline`;
    return res.redirect(googleAuthUrl)
}

module.exports = { signUp, login, handleGoogle, showGoogleOAuth }