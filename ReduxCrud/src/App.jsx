import { Outlet } from "react-router-dom"
import Reg from "./components/Reg"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"



const App = () => {


  
  return <>
    <Outlet></Outlet>
  </>
}

export default App