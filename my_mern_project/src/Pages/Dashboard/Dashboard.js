import React from 'react'
import { useState, useEffect } from 'react';
import {Link}  from "react-router-dom";
// import {useHistory} from 'react-router-dom';
const Dashboard = () => {
  const[course,setCourse]=useState({})

  const getCourse=()=>{
fetch('http://localhost:3008/admin')
.then(res=>res.json())
.then(result=>{
  setCourse(result)
})
  }
  useEffect(()=>{
    getCourse()
  },[])

 
    // const history = useHistory();
  
    // const coursesPage = () => {
    //     history.push("/courses")
    // }
  const deleteItem=(delname)=>{
    const delOptions={
      method:'DELETE',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        "course":delname
      })
    }
  
   fetch("http://localhost:3008/admin",delOptions)
  .then(alert('user deleted'))
  .then(res=>getCourse())
  }
  
  return (
    <>
    <div>
      <h3>Course List</h3>
      <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Course Name</th>
      <th scope="col">Course Duration</th>
    
    </tr>
  </thead>
      
        <tbody>
         {/* {JSON.stringify(course)}  */}
         {course.map((item)=>{
          return(
          
            
            <tr key={item.id}>
            <td>{item.courses}</td>
            <td>{item.coursesDuration}</td>
            <td><button onClick={()=>deleteItem(item.name)}>Delete</button></td>
            {/* <td><Link to="/editcourse"><button onClick={null}>edit</button></Link></td> */}
            </tr>
            
            
          )
         })} 
         </tbody>
      
</table>

{/* <div className='datalist'>
    {course.length > 0
        ? course.map((item,index) => {
            return (
             <>
               <div class="mb-3">{item.name}
           
              <button onClick={()=>deleteItem(item.name)}>Delete</button></div>
            
              </>)
          })
        : "loading"}
    </div> */}
     
</div>
    </>
  )
}

export default Dashboard