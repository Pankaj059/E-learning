import React, { useState } from 'react'
import { Modal, Row, Col, Form,Button } from 'react-bootstrap'
import { FaGlasses } from 'react-icons/fa'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Editcourse = (props) => {

  const [editCourse, setEditCourse] = useState({})
  const [showEdit, setShowEdit] = useState(false)

  const show = () => {
    setShowEdit(true)
    setEditCourse(props.editItem)
  }

  const close = () => {
    setShowEdit(FaGlasses)
  }
  const validateLoginSchema = Yup.object().shape({
    coursename: Yup.string()
        .required("*CourseName is Required!")
        .min(5, "* Must be Greater 5 characters!")
        .max(15, "* Must be Less than 15 characters!"),
    courseduration: Yup.string()
        .required("* Duration is Required!")
})

  return (
    <>
      <div>
        <button onClick={show}>Edit</button>
      </div>
      <Modal show={showEdit} onHide={close}>
        <Modal.Title style={{ background: "blue", color: "white"}}>
          Edit Course
        </Modal.Title>
        <Modal.Body>
        <Formik
                    initialValues={{ coursename: "values.coursename", courseDuration: "values.courseduration" }}
                    validationSchema={validateLoginSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            const requestOptions = {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    courses: values.coursename,
                                    coursesDuration: values.courseduration
                                })
                            }
                            console.log(requestOptions.body)
                            fetch("http://localhost:3001/admin", requestOptions)
                                .then(alert(`${values.coursename} - Course updated Successfully`))
                                .then(resetForm())
                                .then(setSubmitting(false))
                            // categorySubmit();
                            // resetForm();
                            // setSubmitting(false);
                        }, 500);

                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit} className="m-4">
                            <Form.Group as={Row} className="mb-3" controlId="courses">
                                <Form.Label column sm="4">CourseName:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name="courses" placeholder="CourseName" onChange={handleChange} value={values.coursename} style={{ borderColor: touched.coursename && errors.coursename ? "red" : null }} />
                                    {touched.coursename && errors.coursename ? (
                                        <Col className="error-message">{errors.coursename}</Col>
                                    ) : null}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="coursesDuration">
                                <Form.Label column sm="4">CourseDuration:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="string" name="coursesDuration" placeholder="Enter Course Duration" onChange={handleChange} value={values.courseduration} style={{ borderColor: touched.courseduration && errors.courseduration? "red" : null }} />
                                    {touched.courseduration && errors.courseduration ? (
                                        <Col className="error-message">{errors.courseduration}</Col>
                                    ) : null}
                                </Col>
                            </Form.Group>
                           
                            <Modal.Footer>
              <button>Update</button>
              <button onClick={close}>Close</button>
            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
          {/* <Form>
            <Form.Group as={Row}>
              <Form.Label>Course Name :</Form.Label>
              <Col>
                <Form.Control type='text'></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label>Course Duration :</Form.Label>
              <Col>
                <Form.Control type='text'></Form.Control>
              </Col>
            </Form.Group>
            <Modal.Footer>
              <button>Update</button>
              <button onClick={close}>Close</button>
            </Modal.Footer>
          </Form> */}
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Editcourse