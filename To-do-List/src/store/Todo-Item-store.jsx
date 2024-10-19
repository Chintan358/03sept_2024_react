import { createContext, useReducer } from "react";
import App from "../App";


const todoReducer = (todolist, action) => {

    let newTodoItmes = todolist;

    if (action.type === 'ADD_ITEM') {
        newTodoItmes = [...todolist, { name: action.name, date: action.date }]
    }
    else if (action.type == 'REMOVE_ITEM') {
        newTodoItmes = todolist.filter(element => element.name != action.name)
    }

    return newTodoItmes;
}


 
   


export const TodoItemContext = createContext([])


const TodoItemContextProvider = (props)=>{

    const [todolist,dispatcherTodo] = useReducer(todoReducer,[])
  
    const AddButtonclickHandler = (todoname,tododate)=>{
  
          const AddItem = {
            type : "ADD_ITEM",
            name : todoname,
            date : tododate
          }
          dispatcherTodo(AddItem)
       
    }
  
    const RemoveButtonClickHandler = (todoname)=>{
  
      const RemoveItem = {
        type : "REMOVE_ITEM",
        name : todoname
      }
      dispatcherTodo(RemoveItem)
     
    }

    return <><TodoItemContext.Provider value={{todolist,AddButtonclickHandler,RemoveButtonClickHandler}}>
      {props.children}
    </TodoItemContext.Provider></>
  

}

export default TodoItemContextProvider;