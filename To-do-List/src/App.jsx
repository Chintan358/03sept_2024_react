import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Title from './Components/Title'
import TodoItem from './Components/TodoItem'

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
   
    <Title></Title>
    <AddTodo onAddButtonClick={AddButtonclickHandler}></AddTodo>
    <TodoItem todolist={todolist} onRemoveClick={RemoveButtonClickHandler}></TodoItem>
   
  </center>
}

export default App