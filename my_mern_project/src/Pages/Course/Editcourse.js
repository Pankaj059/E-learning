import React, { useState } from 'react'
import { Modal, Row, Col, Form } from 'react-bootstrap'
import { FaGlasses } from 'react-icons/fa'

const Editcourse = (props) => {

  const [editCourse, setEditCourse] = useState({})
  const [showEdit, setShowEdit] = useState(false)


  //     const push = () => {
  //   const updateOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "courses": 
  //       "coursesDuration": 
  //     })
  //   }
  //   fetch("http://localhost:3008/admin", updateOptions)
  //     .then(res => {
  //       alert("course updated")
  //     })
  // }

  const show = () => {
    setShowEdit(true)
    setEditCourse(props.editItem)
  }

  const close = () => {
    setShowEdit(FaGlasses)
  }

  return (
    <>
      <div>
        <button onClick={show}>Edit</button>
      </div>
      <Modal show={showEdit} onHide={close}>
        <Modal.Title style={{ background: "blue", color: "white" }}>
          Edit Course
        </Modal.Title>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Editcourse