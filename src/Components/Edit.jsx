import React, { useState } from 'react'
import {Modal , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../redux/Action';
import {GrUpdate} from 'react-icons/gr'

const Edit = ({todo}) => {
    const [show, setShow] = useState(false);
const [updatedText, setUpdatedText]= useState({})
const handleChange=e=>{
    setUpdatedText(e.target.value)
}
const dispatch=useDispatch()
const handleSubmit =()=>{
    dispatch(updateTodo({
        id : todo.id,
        descrption : updatedText
    })
    );
    handleClose()
};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
            <>
      <Button variant="primary" onClick={handleShow}>
       <GrUpdate/> Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit you to do ....</Modal.Title>
        </Modal.Header>
        <input 
        type='text'
        onChange={handleChange}
        defaultValue={todo.descrption}
        
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}
export default Edit