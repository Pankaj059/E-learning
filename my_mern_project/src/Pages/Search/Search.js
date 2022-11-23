import React from 'react'
import { useState, useEffect } from 'react'
import './Search.css'


const Search = () => {

    const [search, setSearch] = useState({})
    const [name, setName] = useState('')

    const getCourse = () => {
        fetch('http://localhost:3001/admin')
            .then(res => res.json())
            .then(result => {
                setSearch(result)
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
            <div className="search">
                <h1 className='head-text'>Search Courses</h1>

                <input type="text" placeholder="search" onKeyUp={keyTyped}></input>
            </div>
            <div className='list'>
                <li>{name}</li>
            </div>
        {/* <div className="cat">
        {courses.map((item) => {
            item.courses == search ?
            return (
                <div>
                    <li>{courses}</li>:<h3>course not found</h3>
                </div>
            )
        })
    }
    </div> */}

    </>
  )
}

export default Search