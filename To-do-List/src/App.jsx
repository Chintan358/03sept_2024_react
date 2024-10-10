import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Title from './Components/Title'
import TodoItem from './Components/TodoItem'
import { TodoItemContext } from './store/Todo-Item-store'
import Demo from './Components/Demo'

const App = ()=>{

  let [todolist,settodolist] = useState([])

  const AddButtonclickHandler = (todoname,tododate)=>{

      let currentTodoItem = [...todolist,{name:todoname,date:tododate}]
      settodolist(currentTodoItem)
  }

  const RemoveButtonClickHandler = (todoname)=>{

    const CurrentList =   todolist.filter(element=>element.name!=todoname)
    settodolist(CurrentList)

  }

  return <center>
   
    <TodoItemContext.Provider value={{todolist,AddButtonclickHandler,RemoveButtonClickHandler}}>
    <Title></Title>
    <AddTodo></AddTodo>
    <TodoItem></TodoItem>
    </TodoItemContext.Provider>
   
  </center>
}

export default App