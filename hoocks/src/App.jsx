import { useEffect, useState } from "react"

const App = ()=>{

      const [num,setnum] = useState(0)
      const [num1,setnum1] = useState(0)

      useEffect(()=>{
        alert("I am clicked !!!")
      },[num])

      return <><button onClick={()=>setnum(num+1)} >Click me {num}</button>
      <button onClick={()=>setnum1(num1+1)} >Click me {num1}</button>
      </>
}

export default App