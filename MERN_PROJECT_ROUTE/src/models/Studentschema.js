const mongoose=require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: { type: String},
    phoneNumber: { type: String},
    address:{type:String},
    gmail:{type:String}
}, {
    collection: 'students'
})
const students = mongoose.model('StudentModel', StudentSchema)
module.exports= students