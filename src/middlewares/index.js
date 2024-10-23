const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const { validationResult } = require('express-validator')

const { responseHandler } = require('express-intercept');
const redisClient = require('../redis');

const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    const extract = token.split(' ')[1]
    const decoded = jwt.verify(extract, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id)
    req.user = user;
    next();
})
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

function handleError(error, req, res, next) {
    // console.log("Hello")
    // console.log(error.message)
    return res.status(500).json(error.message)
}

function checkId(req, res, next) {
    const id = req.params.id
    const course = courses.find((item) => {
        return item.id == id
    })
    if (!course) {
        return res.status(404).json({
            error: "Resource Not Found"
        })
    }
    next()
}

function handleValidation(req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}

const cacheInterceptor = (ttl) => responseHandler().for(req => {
    return req.method == "GET"
}).if(res => {
    const codes = [200, 201, 202, 203, 204]
    return codes.includes(res.statusCode)
}).getString(async (body, req, res) => {
    const { originalUrl } = res.req
    console.log("Called")
    redisClient.set(originalUrl, body, {
        EX: ttl
    })
})

const cacheMiddleware = asyncHandler(async (req, res, next) => {
    const { originalUrl } = req

    const data = await redisClient.get(originalUrl)
    if (data !== null) {
        return res.json(JSON.parse(data))
    } {
        next()
    }
})


module.exports = { handleError, logger, verifyJWT, handleValidation, cacheInterceptor, cacheMiddleware }