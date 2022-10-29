const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
const bcrypt=require('bcrypt');
const saltRounds = 10;
require('./db/mongoose')()
const env=require("dotenv").config();
const courses=require('../src/models/Courseschema')
const users=require('../src/models/Usersschema')

app.post("/register", async(req, res) => {
    try{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

        req.body['password']=hash
        users.create(req.body)
        .then(result=>{
            res.json({
               userdata:result 
            })
        })
        
       
    });
}
    catch(err){

    }
    
})
app.post("/login",async(req,res)=>{
    try{
        const user = await users.find({name:req.body.name})
         if(user.length>0){
            console.log(user)
             bcrypt.compare(req.body.password,user[0].password,function(err,result){
                const tokenid=jwt.sign({name:req.body.name}, process.env.secret_key)
                users.findOneAndUpdate({name:req.body.name},{
                    $set: {
                        token:tokenid
                    }
                })
                .then(result=>{
                    res.json({
                        msg:"user is matched",
                        _token: tokenid
                    })
                })
           
             })
}
else{
    res.json({
        msg:"user not found"
    })
}
    }
    catch(err){
}   
})

app.get("/admin", async(req,res) => {
   
    const courseList = await courses.find({})
    res.json(courseList)
})
app.post("/admin", async(req, res) => {
    await courses.create(req.body)
    .then(result=>{
        res.json({
            detail:req.body
        })
    })
   
})

app.delete("/admin", async(req, res) => {
    // console.log("")
    await courses.deleteOne({courses:req.body.courses})
     .then(result=>{
      res.json({
          message:"deleted",
          course : result
      })
     })
  })


app.listen(process.env.port, () => {

    console.log(`Server runnning on port ${process.env.port}`);
});