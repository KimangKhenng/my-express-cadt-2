const express = require('express');
const { signUp, login } = require('../controller/auth');
const authRouter = express.Router();

const { signUpSchema } = require('../common/validator');
const { handleValidation } = require('../middlewares');

authRouter.post('/sign-up', signUpSchema, handleValidation, signUp)
authRouter.post('/login', login)

module.exports = authRouter