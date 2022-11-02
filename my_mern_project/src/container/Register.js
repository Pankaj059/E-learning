import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Register = () => {

        const navigate=useNavigate()
    const validateRegisterSchema = Yup.object().shape({
        name: Yup.string()
            .required("* UserName is Required!")
            .min(5, "* Must be Greater 5 characters!")
            .max(15, "* Must be Less than 15 characters!"),
         email:Yup.string()
                .required("*Email is Required!"),
         password: Yup.string()
            .required("* Password is Required!")
    })
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'orange'
      };

    return (

        <div className="registration-body">
            <div className="form-body p-4 rounded">
                <div className="text-center rounded shadow" style={{ background: "#5d5d74", color: "white" }}>
                    <h1 className="" style={{ position: "relative" }}>REGISTER </h1>
                    <span>Welcome To E-learning Platform</span>
                </div>
                <Formik
                    initialValues={{ name: "", email: "" ,password:""}}
                    validationSchema={validateRegisterSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                   name: values.name,
                                    email:values.email,
                                    password: values.password
                                })
                            }
                            console.log(requestOptions.body)
                            fetch("http://localhost:3001/register", requestOptions)
                                //    .then(alert(`${values.username} - Login Successfully`))
                                .then(resetForm())
                                .then(setSubmitting(false))
                                .then(res => res.json())
                                .then(result => {
                                    navigate('/')
                                })
                        }, 500);

                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit} className="m-4">
                            <Form.Group as={Row} className="mb-3" controlId="name">
                                <Form.Label column sm="4">UserName:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name="name" placeholder="UserName" onChange={handleChange} value={values.name} style={{ borderColor: touched.name && errors.name ? "red" : null }} />
                                    {touched.username && errors.username ? (
                                        <Col className="error-message">{errors.name}</Col>
                                    ) : null}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="email">
                                <Form.Label column sm="4">Email:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="email" name="email" placeholder="Enter Email Id" onChange={handleChange} value={values.email} style={{ borderColor: touched.email && errors.email ? "red" : null }} />
                                    {touched.email && errors.email ? (
                                        <Col className="error-message">{errors.email}</Col>
                                    ) : null}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="password">
                                <Form.Label column sm="4">Password:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={values.password} style={{ borderColor: touched.password && errors.password ? "red" : null }} />
                                    {touched.password && errors.password ? (
                                        <Col className="error-message">{errors.password}</Col>
                                    ) : null}
                                </Col>
                            </Form.Group>
                            <Button className="btn " variant="outline-primary" size="sm" type="submit" disabled={isSubmitting} style={{ position: "relative", left: "40rem", marginTop: "10px" }}>Register</Button>
                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem", right: "2rem" }}>
                               <p className='para'> Already Have Account ? <Link to="/login" style={linkStyle}>Login</Link></p>
                            </Form.Text>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>

    )
}

export default Register
// import React from 'react';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Routes, Route, Link } from "react-router-dom";
// import "./register.css"
// const Register = () => {
//     const [getName, setGetName] = useState('')
//     const[email,setEmail] = useState ('')
//     const [pword, setPword] = useState('')


//     const handleRegister=()=>{
//         const options = {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({
//               "name": getName,
//               "email": email,
//               "password":pword
//             })
//           }
//           fetch("http://localhost:3001/register", options)
//             .then(alert('user registered'))
            
//         }


//     return (
// <>

//         <div className="register">

//             <div className="body">
//                 <h3 className='head1'>CREATE AN ACCOUNT</h3>
//                 <div className="mb-3">
//                     <input type="text" class="form-control" placeholder="your name" onKeyUp={(e) => setGetName(e.target.value)} ></input>
//                 </div>
//                 <div className="mb-3">
//                     <input type="text" class="form-control" placeholder="Your Email" onKeyUp={(e) => setEmail(e.target.value)} ></input>
//                 </div>
//                 <div className="mb-3">
//                     <input type="text" class="form-control" placeholder="Password" onKeyUp={(e) => setPword(e.target.value)} ></input>
//                 </div>
//                 <div className="mb-3">
//                     <input type="text" class="form-control" placeholder="Repeat Your Password"  ></input>
//                 </div>
//                 <div className='mb-3'><button onClick={() => handleRegister()}>Register</button></div>
                
//             </div>
    
      {/* <div className='mb-3'>
        <h5>Already have a account.
            <Link to="/login">Login</Link> </h5>
      
</div> */}
    
//       </div>
//       </>
        
//     )
// }
