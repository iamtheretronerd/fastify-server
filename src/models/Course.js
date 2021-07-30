const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    image: String,
    email: String
})

// mongoose.model.exports = mongoose.model('Course', courseSchema);
module.exports = mongoose.model('Course', courseSchema);