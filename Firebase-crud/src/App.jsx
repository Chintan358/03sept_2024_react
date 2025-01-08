import { useEffect, useState } from "react"
import AddUser from "./components/AddUser"
import ViewUser from "./components/ViewUser"
import { db } from './components/firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'



const App = () => {

  const [users, setUsers] = useState([])
  const [user, setuser] = useState({})
  const [loading, setLoading] = useState(false)

  const userRefCollection = collection(db, "users")

  useEffect(() => {


    getData()

  }, [])

  const getData = async () => {
    setLoading(true)
    setUsers([])
    const allusers = await getDocs(userRefCollection)

    var newUser = allusers.docs.map(ele => {

      setUsers(currentuser => [...currentuser, { id: ele.id, uname: ele.data().uname, email: ele.data().email, phone: ele.data().phone }])
      setLoading(false)
    })

  }



  const addUserHandlerFunction = async (userdata) => {

    if (userdata.id) {
      await updateDoc(doc(db, "users", userdata.id), { uname: userdata.uname, email: userdata.email, phone: userdata.phone })
    }
    else {
      await addDoc(userRefCollection, userdata)
    }
    getData()
  }

  const editUser = async (id) => {

    const result = await getDoc(doc(db, "users", id))
    setuser({ id: result.id, uname: result.data().uname, email: result.data().email, phone: result.data().phone })

  }

  const deleteUser = async (id) => {

    await deleteDoc(doc(db, "users", id))
    getData()
  }




  return <>
    <div className="container">
      <div className="row">
        <AddUser addUserHandlerFunction={addUserHandlerFunction} user={user}></AddUser>
        <div className="col-1"></div>
        <ViewUser users={users} editUser={editUser} deleteUser={deleteUser} loading={loading}></ViewUser>
      </div>
    </div>
  </>


}


export default App