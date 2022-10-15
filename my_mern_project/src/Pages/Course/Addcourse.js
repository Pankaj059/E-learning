import React from 'react';
import { useState} from 'react';

const Addcourse = () => {
  const [coursesName, setCoursesName] = useState('')
  const [coursesDuration, setCoursesDuration] = useState('')
  

  const addItems = () => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "courses": coursesName,
        "coursesDuration": coursesDuration
      })
    }
    fetch("http://localhost:3008/admin", options)
      .then(alert('user added'))
      
  }



return (
  <div>
    <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter course Name</label>
      <input type="text" placeholder="coursename" onKeyUp={(e) => setCoursesName(e.target.value)}></input>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter course Duration</label>
      <input type="text" placeholder="Duration" onKeyUp={(e) => setCoursesDuration(e.target.value)}></input>
    </div>
    <div class="mb-3">
      <button onClick={() => addItems()}>ADD</button>
    </div>
  
    </form>
   
  </div>

)
  }

export default Addcourse;