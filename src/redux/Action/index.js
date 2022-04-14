import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "../Constants/action-types"


export const addTodo = (payload) =>{
    return{
        type: ADD_TODO ,
        payload
    }
}
export const DoneTodo = (payload) =>{
    return{
        type: CHECK_TODO ,
        payload
    }
}
export const deleteTodo= (payload) =>{
    return{
        type: DELETE_TODO ,
        payload
    }
}

export const updateTodo= (payload) =>{
    return{
        type: DELETE_TODO ,
        payload
    }
}