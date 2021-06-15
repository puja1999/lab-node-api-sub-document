const mongoose = require('mongoose'), Schema = mongoose.Schema;

const LessonSchema = new mongoose.Schema({
    name: String,
    id: Number
})

const Lesson = mongoose.model('lesson', LessonSchema)

module.exports = {Lesson}