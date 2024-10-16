const express = require('express');
const { signUp, login } = require('../controller/auth');
const authRouter = express.Router();

authRouter.post('/sign-up', signUp)
authRouter.post('/login', login)

module.exports = authRouter