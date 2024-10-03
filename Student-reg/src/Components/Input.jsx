import { useState,useRef } from "react";

const Input = ({onAddbuttonClick})=>{

    

    let nameRef = useRef("")
    let emailRef = useRef("")
    let phoneRef = useRef("")


    const addButtonHandler = (e)=>{

        e.preventDefault()
        onAddbuttonClick(nameRef.current.value,emailRef.current.value,phoneRef.current.value)
        nameRef.current.value=""
        emailRef.current.value=""
        phoneRef.current.value=""
     
    }

    return <div className="container mt-5">
        <form  onSubmit={addButtonHandler}>
        <div className="row">
            <div className="col-3">
                <input type="text" placeholder="Enter username" className="form-control" ref={nameRef} />
            </div>
            <div className="col-3">
                <input type="text" placeholder="Enter Email" className="form-control" ref={emailRef}  />
            </div>
            <div className="col-3">
                <input type="text" placeholder="Enter Phone" className="form-control" ref={phoneRef} />
            </div>
            <div className="col-3">
                <button className="btn btn-success">Add</button>
            </div>
        </div>
        </form>
    </div>
}

export default Input