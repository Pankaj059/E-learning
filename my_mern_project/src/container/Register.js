import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from "react-router-dom";
import "./register.css"
const Register = () => {
    const [getName, setGetName] = useState('')
    const[email,setEmail] = useState ('')
    const [pword, setPword] = useState('')


    const handleRegister=()=>{
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              "name": getName,
              "email": email,
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
                <h3 className='head1'>CREATE AN ACCOUNT</h3>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="your name" onKeyUp={(e) => setGetName(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Your Email" onKeyUp={(e) => setEmail(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Password" onKeyUp={(e) => setPword(e.target.value)} ></input>
                </div>
                <div className="mb-3">
                    <input type="text" class="form-control" placeholder="Repeat Your Password"  ></input>
                </div>
                <div className='mb-3'><button onClick={() => handleRegister()}>Register</button></div>
                
            </div>
    
      <div className='mb-3'>
        <h5>Already have a account.
            <Link to="/login">Login</Link> </h5>
      
</div>
    
      </div>
      </>
        
    )
}
export default Register