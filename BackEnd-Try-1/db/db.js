// db.js
const mongoose = require('mongoose');

const connectDB = (url) => {
    console.log("Connection Successful!")
    return mongoose.connect(url);
}

module.exports = connectDB;