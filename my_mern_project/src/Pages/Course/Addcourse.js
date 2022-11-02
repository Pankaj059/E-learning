import React from 'react';
import {useState} from 'react';
import { changeCourseName, changeCourseDuration } from "./addcourse.slice";
import { useDispatch, useSelector } from "react-redux";
import './Addcourse.css';
// import '../../UploadedImages'

const Addcourse = () => {

  const [useFile, setUseFile] = useState('')

  const dispatch = useDispatch();
  const { coursesName, courseDuration } = useSelector((state) => state.course);

  const cname = (v2) => {
    dispatch(changeCourseName(v2));
  };


  const cduration = (value) => {
    dispatch(changeCourseDuration(value));
  };


  const handleFile = event => {
    setUseFile(event.target.files[0])
  }

  const addItems = () => {

    const formData = new FormData();
    formData.append("avatar", useFile)
    formData.append("courses", coursesName)
    formData.append("coursesDuration", courseDuration)
    fetch("http://localhost:3001/admin", {
      method: "POST",
      body: formData
      // dataType: "jsonp"
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
            <button className='btn' onClick={() => addItems()}>ADD</button>
          </div>

        </div>
 
      <div><input placeholder="type" type="file" name="avatar" onChange={handleFile} /></div>

    </div>

  )
}

export default Addcourse;