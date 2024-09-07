import { useState } from "react"


const Counter = ()=>{

    let [data, setdata] = useState(1)

    const counter = ()=>{
        data+=1;
        setdata(data)
        
    }

    return <>
        <span>{data}</span><br />
        <button onClick={counter}>Click</button>
    </>
}

export default Counter