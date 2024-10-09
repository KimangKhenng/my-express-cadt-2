const express = require('express')

const app = express()

app.get('/courses', function (req, res) {
    res.status(202).send("Hello")
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