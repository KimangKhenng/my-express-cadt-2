const mongoose = require('mongoose');

const dbName = process.env.DB_NAME
// MongoDB connection URI
const mongoURI = `mongodb://localhost:27017`;

async function dbConnect() {
    mongoose.connection.on('connected', () => {
        console.log("Connected: ", dbName)
    })
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
        dbName: dbName
    })
}

module.exports = dbConnect
