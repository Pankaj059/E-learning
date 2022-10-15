const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const port = 3008;
const uri = 'mongodb://localhost:27017/Elearningdb'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gmail: { type: String, required: true },
    password: { type: String, required: true }
}, {
    collection: 'users'
})
const users = mongoose.model('UserModel', UserSchema)

app.post("/register", async(req, res) => {
    users.create(req.body)
    res.json({
        detail:req.body
    })
})
const CourseSchema = new mongoose.Schema({
    courses: { type: String, required: true },
    coursesDuration: { type: String, required: true }
  
}, {
    collection: 'courses'
})
const courses = mongoose.model('CoursesModel', CourseSchema)

app.post("/admin", async(req, res) => {
    courses.create(req.body)
    res.json({
        detail:req.body
    })
})
app.get("/admin", async(req,res) => {
    const courseList = await courses.find({})
    res.json(courseList)
})
app.delete("/admin", async(req, res) => {
    await courses.deleteOne({course:req.body.course})
     .then(result=>{
      res.json({
          message:"deleted",
          course : result
      })
     })
  })



async function connect() {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to mongodb");
    }
    catch (error) {
        console.error(error);
    }
}
connect()

app.listen(3008, () => {
    console.log(`Server runnning on port ${port}`);
});
