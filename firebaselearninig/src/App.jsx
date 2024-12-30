// import { getDatabase, ref, set } from 'firebase/database'
// import { app } from './firebase'


// const db = getDatabase(app)

// const App = () => {


//   const addData = () => {

//     set(ref(db, "users/tops"), {
//       id: 1,
//       name: "Krunal",
//       email: "krunal@yahoo.com",
//       age: 26
//     })

//   }


//   return <button onClick={addData}>Add Data</button>
// }

import { db } from './firebase-config'

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

const App = () => {

  const userCollectionRef = collection(db, "students")

  // const getAllUsers = () => {
  //   const data = getDocs(userCollectionRef)
  //   console.log(data);

  // }

  const addUser = () => {
    const u1 = { "username": "Test", "email": "test@gmail.com", "age": "25" }
    return addDoc(userCollectionRef, u1)
  }

  return <button onClick={addUser}>Click Me</button>
}





export default App