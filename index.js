const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/courses', function (req, res) {
    res.status(202).send("Hello")
})

// Allow user to create courses
app.post('/courses', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

// Conventional function
app.get('/', function (req, res) {
    res.json({
        key: 'sdsdfsdf',
        id: 'sdsfdsdf'
    })
})

// Arrow function
app.get('/shortcut', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})