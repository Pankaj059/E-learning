import React from 'react';
import {changeCourseName, changeCourseDuration} from "./addcourse.slice";
import {useDispatch, useSelector} from "react-redux";
// import { useState} from 'react';
import './Addcourse.css';

// const Addcourse = () => {
//   const [coursesName, setCoursesName] = useState('')
//   const [coursesDuration, setCoursesDuration] = useState('')
  
  const Addcourse = () => {
    const dispatch = useDispatch();
    const { coursesName ,courseDuration} = useSelector((state) => state.course);
  
    const cname = () => {
      dispatch(changeCourseName());
    };

    
    const cduration= () => {
      dispatch(changeCourseDuration());
    };

  const addItems = () => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "courses": coursesName,
        "courseDuration": courseDuration
      })
    }
    fetch("http://localhost:3001/admin", options)
      .then(alert('user added'))
      
  }


return (
  <div>
    <form>
      <div className='con'>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter course Name</label>
      <input type="text" placeholder="coursename" onKeyUp={(e) => cname(e.target.value)}></input>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter course Duration</label>
      <input type="text" placeholder="Duration" onKeyUp={(e) => cduration(e.target.value)}></input>
    </div>
    <div class="mb-3">
      <button className='btn'onClick={() => addItems()}>ADD</button>
    </div>
    </div>
    </form>
   
  </div>

)
  }

export default Addcourse;