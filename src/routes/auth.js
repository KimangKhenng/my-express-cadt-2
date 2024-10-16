const express = require('express');
const { signUp } = require('../controller/auth');
const authRouter = express.Router();

authRouter.post('/sign-up', signUp)

module.exports = authRouter