import React from 'react';
import { useState } from 'react';
import { changeCourseName, changeCourseDuration, changeCourseCost, changeCourseDescription } from "./addcourse.slice";
import { useDispatch, useSelector } from "react-redux";
import './Addcourse.css';
// import '../../UploadedImages'

const Addcourse = () => {

  const [useFile, setUseFile] = useState('')

  const dispatch = useDispatch();
  const { coursesName, courseDuration, courseCost, courseDescription } = useSelector((state) => state.course);

  const cname = (v2) => {
    dispatch(changeCourseName(v2));
  };

  const cduration = (value) => {
    dispatch(changeCourseDuration(value));
  };

  const ccost = (v3) => {
    dispatch(changeCourseCost(v3));
  };

  const cdescription = (v4) => {
    dispatch(changeCourseDescription(v4));
  };

  const handleFile = event => {
    setUseFile(event.target.files[0])
  }

  const addItems = () => {

    const formData = new FormData();
    formData.append("avatar", useFile)
    formData.append("courses", coursesName)
    formData.append("coursesDuration", courseDuration)
    formData.append("courseCost", courseCost)
    formData.append("courseDescription", courseDescription)
    fetch("http://localhost:3001/admin", {
      method: "POST",
      body: formData,
      dataType: "jsonp"
    })
  }


  return (
    <div>

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
          <label for="exampleFormControlInput1" class="form-label">Enter course Cost</label>
          <input type="text" placeholder="Cost" onKeyUp={(e) => ccost(e.target.value)}></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Enter course Details</label>
          <textarea placeholder="Enter Course Description" onKeyUp={(e) => cdescription(e.target.value)}> </textarea>
        </div>
        <div class="mb-3">
          <input placeholder="type" type="file" name="avatar" onChange={handleFile} />
        </div>
        <div class="mb-3">
          <button className='btn' onClick={() => addItems()}>ADD</button>
        </div>

      </div>
    </div>

  )
}

export default Addcourse;