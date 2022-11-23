const mongoose = require('mongoose')
const CourseSchema = new mongoose.Schema({
    courses: { type: String },
    coursesDuration: { type: String},
    courseImage:{type:String},
    courseCost:{type:String},
    courseDescription:{type:String}
  
}, {
    collection: 'courses'
})
const courses = mongoose.model('CoursesModel', CourseSchema)
module.exports= courses