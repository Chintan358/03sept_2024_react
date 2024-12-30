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

import { useEffect, useRef } from 'react'
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

  const uname = useRef()
  const email = useRef()
  const age = useRef()


  const addUser = (e) => {
    e.preventDefault()
    const u1 = { "username": uname.current.value, "email": email.current.value, "age": age.current.value }

    uname.current.value = ""
    email.current.value = ""
    age.current.value = ""
    getMarkers()
    return addDoc(userCollectionRef, u1)

  }

  useEffect(() => {
    getMarkers()
  }, [])
  
  async function getMarkers() {

    const querySnapshot = await getDocs(userCollectionRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });

  }



  return <div>
    <form action="" onSubmit={addUser}>
      <input type="text" placeholder='Enter username' ref={uname} />
      <input type="text" placeholder='Enter email' ref={email} />
      <input type="text" placeholder='Enter age' ref={age} />
      <input type="submit" />
    </form>
  </div>
}





export default App