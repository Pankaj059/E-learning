import React from 'react'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Homepage.css"


const Homepage = () => {
    const [course, setCourse] = useState([])

    const getCourse = () => {
        fetch('http://localhost:3001/admin')
            .then(res => res.json())
            .then(result => {
                setCourse(result)
            })
    }
    useEffect(() => {
        getCourse()
    }, [])
    return (
        <>
        <div>
              {/* {JSON.stringify(course)}  */}
         <h2 className='title'> Available Courses</h2>
         </div>
         <div className='home'>
            {course.map((item) => {
                return (
                    <Card sx={{ width: 300 ,height: 400}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            img src={require('../../Uploads/' + item.courseImage)}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               <h5>Course Name:{item.courses}</h5> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <p>Course Duration:{item.coursesDuration}</p> <br/>
                              <p> Course Cost:{item.courseCost}</p> <br/>   
                               <p>Course Details:{item.courseDescription}</p> 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Enroll Now</Button>
                            <Button size="small"> More</Button>
                        </CardActions>
                    </Card>

                 )
            })} 
        </div>
</>
    )
}

export default Homepage