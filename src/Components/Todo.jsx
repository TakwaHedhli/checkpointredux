import React from 'react'
import { useDispatch } from 'react-redux'
import {  deleteTodo, DoneTodo } from '../redux/Action'
import Edit from './Edit'
import {GoChecklist} from 'react-icons/go'
import {MdOutlineDeleteSweep} from 'react-icons/md'

const Todo = ({todo, index}) => {
    const dispatch=useDispatch()
       const handleDone = ()=>{
           dispatch(DoneTodo({
               id:todo.id
           }))
       }
       const handleDelete=()=>{
         dispatch(deleteTodo({
id : todo.id
         }))
       }
  return (
    <div key={todo.id} className="my-todo" >
       <h2
       style={{textDecoration : todo.isDone ? 'line-through' : 'none' }} 
       > {index + 1}/- {todo.descrption}</h2>
      <div className="my-btn">
        <button  onClick={handleDone}> <GoChecklist/> Done</button>
         <button onClick={handleDelete}><MdOutlineDeleteSweep/> Delete</button>
        <Edit todo={todo}/>
      </div>
    </div>
  )
}

export default Todo