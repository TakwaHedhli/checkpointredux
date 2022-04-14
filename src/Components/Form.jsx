import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../redux/Action'

const Form = () => {

const [textInput , setTextInput]=useState('')
const handleChange= e =>{
    setTextInput(e.target.value)
}
const dispatch=useDispatch()

const handleClick = e =>{
    e.preventDefault()
    dispatch(addTodo({
        text:textInput
    }))
    setTextInput('')
}
  return (
    <div>
        <form className='my-form' >
<input 
type="text"
placeholder='Enter to do ....'
className='input'
required
onChange={handleChange}
value={textInput}
/>
<button type='submit'  onClick={handleClick}>Add</button>

        </form>
    </div>
  );
};

export default Form