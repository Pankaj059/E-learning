import React from 'react';
import {changeCourseName, changeCourseDuration} from "./addcourse.slice";
import {useDispatch, useSelector} from "react-redux";
import './Addcourse.css';
  
  const Addcourse = () => {
    const dispatch = useDispatch();
    const { coursesName ,courseDuration} = useSelector((state) => state.course);
  
    const cname = (v2) => {
      dispatch(changeCourseName(v2));
    };

    
    const cduration= (value) => {
      dispatch(changeCourseDuration(value));
    };

  const addItems = () => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
      courses: coursesName,
        coursesDuration: courseDuration
      })
    }
    fetch("http://localhost:3001/admin", options)
      // .then(alert('user added'))
      
  }


return (
  <div>
    <form>
    <p className='head3'>ADD COURSE DETAILS</p>
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