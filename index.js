const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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


app.get('/courses', function (req, res) {
    return res.status(202).send("Hello")
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