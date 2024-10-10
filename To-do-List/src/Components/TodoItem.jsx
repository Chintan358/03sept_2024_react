import { useContext } from "react"
import Items from "./Items"
import { TodoItemContext } from "../store/Todo-Item-store"


const TodoItem = ({onRemoveClick})=>{

    const {todolist} =  useContext(TodoItemContext)
   
    
    return  <>
        {todolist.map(element=><Items key={element.name} todoname={element.name} tododate={element.date} onRemoveClick={onRemoveClick}></Items>)}
    </>
    
    
 
}

export default TodoItem