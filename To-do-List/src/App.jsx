import { useReducer, useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Title from './Components/Title'
import TodoItem from './Components/TodoItem'
import TodoItemContextProvider, { TodoItemContext } from './store/Todo-Item-store'
import Demo from './Components/Demo'

const App = ()=>{



  return <center>
   
    <TodoItemContextProvider>
      <Title></Title>
      <AddTodo></AddTodo>
      <TodoItem></TodoItem>
    </TodoItemContextProvider>
   
  </center>

}
export default App