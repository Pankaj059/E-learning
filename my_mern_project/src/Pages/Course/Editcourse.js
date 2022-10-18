import React,{useState} from 'react'

const Editcourse = () => {
const [editCourse,setEditCourse]=useState({})
const[show,setShow]=useState(false)
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

  return (
    <div>
       {/* <Button onClick={handleOpen}>Edit</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal> */}
 <div class="mb-3">
  <h5>hello there</h5>
      {/* <button onClick={() =>  push() }>Update</button> */}
    </div>
    </div>
  )
}

export default Editcourse