import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adduser } from "../features/crud/crudSlice"
import { Link } from "react-router-dom"


const Reg = () => {

    const data = useSelector((state) => state.crud)
    console.log(data.uname);


    const dispatch = useDispatch()

    const uname = useRef()
    const email = useRef()
    const phone = useRef()

    const adduserHandler = (e) => {
        e.preventDefault()
        dispatch(adduser({ uname: uname.current.value, email: email.current.value, phone: phone.current.value }))
        uname.current.value = ""
        email.current.value = ""
        phone.current.value = ""
    }

    return <div className="container">
        <div className="row">
            <div className="col-5 card p-5 mx-auto mt-3">
                <h1>User Registration</h1>
                <hr />
                <form action="" onSubmit={adduserHandler}>
                    <div className="form-group">
                        <label htmlFor="uname">Username</label>
                        <input type="text" name="uname" id="uname" ref={uname} placeholder="Enrter username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" ref={email} placeholder="Enrter Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" ref={phone} placeholder="Enrter Phone" className="form-control" />
                    </div>
                    <br />
                    <input type="submit" className="btn btn-success" />

                    <Link to={"display"}>View users</Link>
                </form>
            </div>
        </div>
    </div>
}

export default Reg