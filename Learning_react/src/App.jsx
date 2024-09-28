import Title from "./Components/Title"
import List from "./Components/List"
import Para from "./Components/Para"
import Counter  from "./Components/Counter"
import Input from "./Components/Input"
import React, { useState } from 'react'
import Test from "./Components/Test"

function App()
{

   

    let [student,setStudent] = useState([])

    const KeyHandler = (e)=>{
        if(e.key=='Enter')
        {
           let data =  e.target.value
           let currentStudents = [...student,data]
           setStudent(currentStudents)
        }
    }

    const RemoveHandler = (stname)=>{
        
       const newStudents =  student.filter((element)=>element!=stname)
       setStudent(newStudents)
        
    }

    return  <>
            <Title></Title>
            <Input onKeyHandle={KeyHandler}></Input>
            <List stdata={student} clg={"Tops tech"} OnRemoveButtonclick={RemoveHandler} ></List>
            <Para></Para>
            <Counter></Counter>
            <Test></Test>
            </>
}


export default App