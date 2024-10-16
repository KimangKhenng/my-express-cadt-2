require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { logger, handleError } = require('./src/middlewares/index.js')

const dbConnect = require('./src/db/db.js')
const bookRouter = require('./src/routes/book.js')
const userRouter = require('./src/routes/user.js')
const courseRouter = require('./src/routes/course.js')
const authRouter = require('./src/routes/auth.js')

const app = express()

dbConnect().catch((err) => {
    console.log(err)
})

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(logger)

// Router
app.use('/courses', courseRouter)
app.use('/books', bookRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.use(handleError)

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}`)
})