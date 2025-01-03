import Input from "./Components/Input"
import List from "./Components/List"
import Title from "./Components/Title"
import { useEffect, useState } from "react"

import { db } from './firebase'
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
const App = () => {

  const studentRefCollection = collection(db, "students")

  let [students, setStudents] = useState([])
  let [student, setStudent] = useState({})

  const addStudent = async (id, name, email, phone) => {

    if (id) {

      await updateDoc(doc(db, "students", id), { name: name, email: email, phone: phone })
      setStudent("")
    }
    else {
      addDoc(studentRefCollection, { name: name, email: email, phone: phone })
    }


    getdata()
  }


  const removeStudent = async (id) => {

    await deleteDoc(doc(db, "students", id))
    getdata()

  }



  const getdata = async () => {
    setStudents([])
    const studentData = await getDocs(studentRefCollection)
    studentData.forEach((doc) => {
      setStudents((currentStudent) => [...currentStudent, { id: doc.id, name: doc.data().name, email: doc.data().email, phone: doc.data().phone }])


    })

  }

  useEffect(() => {
    getdata()
  }, [])

  const editHandler = async (id) => {

    const getSnap = await getDoc(doc(db, "students", id))

    setStudent({ id: getSnap.id, name: getSnap.data().name, email: getSnap.data().email, phone: getSnap.data().phone })


  }



  return <center>
    <Title></Title>
    <Input onAddbuttonClick={addStudent} student={student}></Input>
    <List students={students} onRemovebuttonClick={removeStudent} editHandler={editHandler}></List>



  </center>
}


export default App