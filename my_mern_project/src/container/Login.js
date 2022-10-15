import React, { useState, useEffect } from 'react';
// import './App.css';
const Login=()=> {

const[logUsers, setLogUsers] = useState ('')
const[passValue,setPassValue] = useState ('')
const [errorEmail, setErrorEmail] = useState('')
const [errorPassword, setErrorPassword] = useState('')

const buttonSubmit=()=>{
    const z = new RegExp("^([a-z].+[0-9]?.+)@([a-z].+)(\.)([a-z].+)$");
   let errors ="";
    const test = z.test(logUsers)
if(test===true)
{
    errors = ''
    setErrorEmail(errors)
}
else{
    errors = "Invalid email"
    setErrorEmail(errors)
}
return errors  
}

const passCheck=()=>{
    const z = new RegExp("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/");
    let pass="";
    const test = z.test(passValue)
if(test===true)
{
    pass= ''
    setErrorPassword(pass)
}
else{
    pass="Enter valid password"
    setErrorPassword(pass)
}
return pass

}
  return (
    <div className="body">
    <div className="login">
        
       <h1>Login Form    </h1>
      <div className="form-group-A">
      <label for="email">Email: </label>   
      <input type="string" placeholder="" onKeyUp={(e) => setLogUsers(e.target.value)}></input>
        </div>
        <div className="popUp-Error">{errorEmail}</div>
        
        <div className="form-group-B">
        <label for="password">Password : </label>   
       <input type="text" placeholder=""  onKeyUp={(e) => setPassValue(e.target.value)}></input>
        </div>
        <div className="popUp-Error">{errorPassword}</div>
        <button type="button" onClick={()=>{buttonSubmit();passCheck()}}>submit</button>

        </div>
        </div>
  )
}

export default Login 