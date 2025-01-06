import { useEffect, useState } from "react"
import AddUser from "./components/AddUser"
import ViewUser from "./components/ViewUser"
import { db } from './components/firebase'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'



const App = () => {

  const [users, setUsers] = useState([])

  const userRefCollection = collection(db, "users")

  useEffect(() => {


    getData()

  }, [])

  const getData = async () => {
    setUsers([])
    const allusers = await getDocs(userRefCollection)

    var newUser = allusers.docs.map(ele => {

      setUsers(currentuser => [...currentuser, { id: ele.id, uname: ele.data().uname, email: ele.data().email, phone: ele.data().phone }])
    })

  }



  const addUserHandlerFunction = async (userdata) => {

    await addDoc(userRefCollection, userdata)
    getData()
  }

  const editUser = async (id) => {

  }

  const deleteUser = async (id) => {

    await deleteDoc(doc(db, "users", id))
    getData()
  }

  return <>
    <div className="container">
      <div className="row">
        <AddUser addUserHandlerFunction={addUserHandlerFunction}></AddUser>
        <div className="col-1"></div>
        <ViewUser users={users} editUser={editUser} deleteUser={deleteUser}></ViewUser>
      </div>
    </div>
  </>


}


export default App