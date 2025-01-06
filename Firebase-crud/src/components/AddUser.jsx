import { useEffect, useRef } from "react"

const AddUser = ({ addUserHandlerFunction }) => {


    const uname = useRef()
    const email = useRef()
    const phone = useRef()

    const addUserHandler = (e) => {

        e.preventDefault()
        const userdata = {
            uname: uname.current.value,
            email: email.current.value,
            phone: phone.current.value
        }
        addUserHandlerFunction(userdata)
        uname.current.value = ""
        email.current.value = ""
        phone.current.value = ""
    }

   

    return <div className="col-4 card mt-3 p-3">
        <h1>User Registration</h1>
        <hr />
        <form action="" onSubmit={addUserHandler}>
            <div className="form-group">
                <label htmlFor="uname">Username</label>
                <input type="text" id="uname" ref={uname} placeholder="Enter username" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref={email} placeholder="Enter Email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phno</label>
                <input type="text" id="phno" ref={phone} placeholder="Enter Phone" className="form-control" />
            </div>
            <br />
            <div>
                <input type="submit" className="btn btn-success" />
            </div>
        </form>
    </div>
}

export default AddUser