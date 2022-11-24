import React from 'react'
import { useState, useEffect } from 'react'
import './Search.css'


const Search = () => {

    const [course, setCourse] = useState([])
    const [name, setName] = useState('')

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
    const keyTyped = (event) => {
        setName(event.target.value)
    };

    return (
        <>
        {JSON.stringify(course)}  
            <div className="search">
                <h1 className='head-text'>Search Courses</h1>

                <input type="text" placeholder="search" onKeyUp={keyTyped}></input>
</div>
                      
            <div className="cat">
               
                {course.filter((item=>item.courses.toLowerCase().includes(name)).map((item) => {
                    return (
                        <div>
                            <ul>
                                <li>{item.courses}</li>
                            </ul>

                        </div>
                    )
                }))
                }
            </div>

        </>
    )
}

export default Search