const mongoose = require('mongoose')
const CourseSchema = new mongoose.Schema({
    courses: { type: String, required: true },
    coursesDuration: { type: String, required: true },
    courseImage:{type:String,required:true}
  
}, {
    collection: 'courses'
})
const courses = mongoose.model('CoursesModel', CourseSchema)
module.exports= courses