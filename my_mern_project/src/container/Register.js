import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from "../container/Login"
const Register = () => {
    const [getName, setGetName] = useState('')
    const[gmail,setGmail] = useState ('')
    const [pword, setPword] = useState('')


    const handleRegister=()=>{
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              "name": getName,
              "gmail": gmail,
              "password":pword
            })
          }
          fetch("http://localhost:3001/register", options)
            .then(alert('user registered'))
            
        }


    return (
<>

        <div className="register">

            <div className="body">
                <h3>CREATE AN ACCOUNT</h3>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="your name" onKeyUp={(e) => setGetName(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Your Email" onKeyUp={(e) => setGmail(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Password" onKeyUp={(e) => setPword(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Repeat Your Password"  ></input>
                </div>
                <div className='mb-3'><button onClick={() => handleRegister()}>Register</button></div>
                
            </div>
    
      <div className='login-link'>
        <h5>Already have a account.<Link to="/Login">Login</Link> </h5>
      
</div>
    
      </div>
      </>
        
    )
}
export default Register