import { useState, useRef, useEffect } from "react";

const Input = ({ onAddbuttonClick, student }) => {

    let idRef = useRef("")
    let nameRef = useRef("")
    let emailRef = useRef("")
    let phoneRef = useRef("")

    useEffect(() => {
        if (student.id != undefined) {
            nameRef.current.value = student.name
            emailRef.current.value = student.email
            phoneRef.current.value = student.phone
        }


    })


    const addButtonHandler = (e) => {

        e.preventDefault()
        onAddbuttonClick(idRef.current.value, nameRef.current.value, emailRef.current.value, phoneRef.current.value)
        idRef.current.value = ""
        nameRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""

    }

    return <div className="container mt-5">
        <form onSubmit={addButtonHandler}>
            <div className="row">
                <input type="hidden" name="" id="" value={student.id} ref={idRef} />
                <div className="col-3">
                    <input type="text" placeholder="Enter username" className="form-control" ref={nameRef} />
                </div>
                <div className="col-3">
                    <input type="text" placeholder="Enter Email" className="form-control" ref={emailRef} />
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