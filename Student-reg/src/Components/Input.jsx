import { useState } from "react";

const Input = ({onAddbuttonClick})=>{

    // let [name, setName] = useState("")
    // let [email,setEmail] = useState("")
    // let [phone, setPhone] = useState("")

    // const setEmailHandler = (e)=>{
    //     setEmail(e.target.value)
    // }

    // const setPhoneHandler = (e)=>{
    //     setPhone(e.target.value)
    // }

    // const setNameHandler = (e)=>{
    //     setName(e.target.value)
    // }

    const addButtonHandler = (e)=>{

        e.preventDefault()
       // console.log(e.target[0].value);
        
        onAddbuttonClick(e.target[0].value,e.target[1].value,e.target[2].value)
        
        e.target[0].value=""
        e.target[1].value=""
        e.target[2].value=""
    }

    return <div className="container mt-5">
        <form  onSubmit={addButtonHandler}>
        <div className="row">
            <div className="col-3">
                <input type="text" placeholder="Enter username" className="form-control"  />
            </div>
            <div className="col-3">
                <input type="text" placeholder="Enter Email" className="form-control"   />
            </div>
            <div className="col-3">
                <input type="text" placeholder="Enter Phone" className="form-control" />
            </div>
            <div className="col-3">
                <button className="btn btn-success">Add</button>
            </div>
        </div>
        </form>
    </div>
}

export default Input