import { useEffect, useState } from "react"
import Login from "./components/Login"
import Reg from "./components/Reg"
import { auth } from './components/firebase'
import Profile from "./components/Profile"
const App = () => {

  const [status, setstatus] = useState()

  useEffect(() => {

    const getuser = async () => {

      await auth.onAuthStateChanged((user) => {
        setstatus(user)
      })

    }
    getuser()
  }, [])

  return <>
    {status ? <Profile></Profile> : <Login></Login>}

  </>
}


export default App