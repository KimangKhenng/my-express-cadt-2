const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const courses = [
    { id: '1', title: "JS" },
    { id: '2', title: "Javascript" },
    { id: '3', title: "Python" },
]
/**
 * Authenticate
 * Authorize
 * Error Checking
 */
function logger(req, res, next) {
    // console.log(req)
    console.log("Incoming request", req.rawHeaders[3])
    // Example, request from unauthorized user
    // return res.status(404).send("Forbidden")
    next()
}

function authroize(req, res, next) {
    return res.status(404).json({
        msg: "Not Found"
    })
}

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(logger)


/**
 * Get all courses
 */
app.get('/courses', function (req, res) {
    console.log(req.query)
    // Pass req query to database
    return res.status(202).send("Hello")
})

/**
 * Get a course by ID
 */
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const course = courses.find((item) => {
        return item.id == id
    })
    return res.json(course)
})

// Allow user to create courses
app.post('/courses', authroize, (req, res) => {
    console.log(req.body)
    return res.json(req.body)
})

// Conventional function
app.get('/', function (req, res) {
    return res.json({
        key: 'sdsdfsdf',
        id: 'sdsfdsdf'
    })
})

// Arrow function
app.get('/shortcut', (req, res) => {
    return res.json({
        message: "Hello World"
    })
})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})