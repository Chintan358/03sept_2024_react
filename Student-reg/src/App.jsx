import Input from "./Components/Input"
import List from "./Components/List"
import Title from "./Components/Title"
import { useState } from "react"
const App = ()=>{


  let [students, setStudents] = useState([])

  const addStudent = (name,email,phone)=>{

    setStudents((currentStudent)=>[...currentStudent, {name, email, phone}])
    
  }

  // const addStudent = (name,email,phone)=>{

  //   setStudents((currentStudent)=>{
  //     let newStudent = [...currentStudent, {name, email, phone}]
  //     return newStudent
  //   })
  // }



  const removeStudent = (name)=>{

        let newStudents = students.filter(student=>student.name!== name)
        setStudents(newStudents)
  }

  return <center>
    <Title></Title>
    <Input onAddbuttonClick={addStudent}></Input>
    <List students={students} onRemovebuttonClick={removeStudent}></List>



  </center>
}


export default App