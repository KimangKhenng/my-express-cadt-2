require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const asyncHandler = require('express-async-handler')
const courseRouter = require('./src/routes/course.js')
const { logger, handleError } = require('./src/middlewares/index.js')


// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(logger)

app.use('/courses', courseRouter)

app.use(handleError)

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}`)
})