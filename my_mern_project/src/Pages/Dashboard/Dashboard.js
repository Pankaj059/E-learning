import React from 'react'
import { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
// import Header from '../../components/Header';
import Editcourse from '../Course/Editcourse';

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

      <div className='dashboard'>
        <h3 className='header'>Course List</h3>
        <table class="table">
          <thead>
            <tr>

              <th scope="col">Course Name</th>
              <th scope="col">Course Duration</th>

            </tr>
          </thead>

          <tbody>
            {/* {JSON.stringify(course)} 
          */}
            {course.length > 0 ? course?.map((item) => {
              return (


                <tr key={item.id}>
                  <td>{item.courses}</td>
                  <td>{item.coursesDuration}</td>
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