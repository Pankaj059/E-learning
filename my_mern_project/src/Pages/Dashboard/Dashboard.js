import React from 'react'
import { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
// import Header from '../../components/Header';
import Editcourse from '../Course/Editcourse';
// import '../../../../MERN_PROJECT_ROUTE/Uploads'

const Dashboard = () => {
  const [course, setCourse] = useState({})

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


  const deleteItem = (delname) => {
    const delOptions = {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "courses": delname
      })
    }

    fetch("http://localhost:3001/admin", delOptions)
      .then(alert('Course deleted'))
      .then(res => getCourse())
  }

  return (
    <>

      <div className='container'>
        <h3 className='header'>Course List</h3>
        <table class="table">
          <thead>
            <tr>

              <th scope="col">Course Name</th>
              <th scope="col">Course Duration</th>
              <th scope="col">Course Image</th>

            </tr>
          </thead>

          <tbody>
            {/* {JSON.stringify(course)} 
          */}
            {course.length > 0 ? course?.map((item) => {
              // console.log('../../../../MERN_PROJECT_ROUTE/Uploads/' + item.courseImage)
              const imgPath = '../../../../MERN_PROJECT_ROUTE/Uploads/' + item.courseImage
              console.log(imgPath)
              return (


                <tr key={item.id}>
                  <td>{item.courses}</td>
                  <td>{item.coursesDuration}</td>
                  <td><img src={require(imgPath)} alt="avatar" width="50px" height="50px" /></td>
                  <td><button onClick={() => deleteItem(item.courses)}>Delete</button></td>
                  <td>
                    <div>
                      <Editcourse editItem={item} />
                    </div>
                  </td>
                </tr>


              )
            }) : <h1>loader</h1>}
          </tbody>

        </table>


      </div>
    </>
  )
}

export default Dashboard