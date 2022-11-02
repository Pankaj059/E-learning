import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

    const navigate = useNavigate()

    const validateLoginSchema = Yup.object().shape({
        username: Yup.string()
            .required("* UserName is Required!")
            .min(5, "* Must be Greater 5 characters!")
            .max(15, "* Must be Less than 15 characters!"),
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
                    <h1 className="" style={{ position: "relative" }}>SIGN IN</h1>
                    <span>Welcome To E-learning Platform</span>
                </div>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validateLoginSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userName: values.username,
                                    password: values.password
                                })
                            }
                            console.log(requestOptions.body)
                            fetch("http://localhost:3001/login", requestOptions)
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
                            <Form.Group as={Row} className="mb-3" controlId="username">
                                <Form.Label column sm="4">UserName:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name="username" placeholder="UserName" onChange={handleChange} value={values.username} style={{ borderColor: touched.username && errors.username ? "red" : null }} />
                                    {touched.username && errors.username ? (
                                        <Col className="error-message">{errors.username}</Col>
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
                            <Button className="btn " variant="outline-primary" size="sm" type="submit" disabled={isSubmitting} style={{ position: "relative", left: "40rem", marginTop: "10px" }}>SIGN IN</Button>
                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem", right: "2rem" }}>
                               <p className='para'>Dont Have  A Account ? <Link to="/register" style={linkStyle}>REGISTER</Link></p> 
                            </Form.Text>
                            <div><input placeholder="type" type="file" name="avatar"  /></div>
    
                        </Form>
                    )}
                </Formik>
            </div>

        </div>

    )
}

export default Login