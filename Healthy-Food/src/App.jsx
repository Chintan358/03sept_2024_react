import FoodItems from "./Components/FoodItems"
import Input from "./Components/Input"
import Title from "./Components/Title"
import styles from './App.module.css'
import Container from "./Components/Container"
import { useState } from "react"
import ErrorMsg from "./Components/ErrorMsg"

const App = ()=>{

    const [fooditems, setfooditems] = useState([])

    const inputHandler = (e)=>{
      if(e.key==='Enter')
      {
        
        const newArr = [...fooditems,e.target.value]
        setfooditems(newArr)
      }
      
    }

    return <><Container>
        <Title></Title>
        <Input inputHandler={inputHandler}></Input>
        <ErrorMsg fooditems={fooditems}></ErrorMsg>
        <FoodItems fooditems={fooditems}></FoodItems>
      </Container>

      
      </>
}

export default App