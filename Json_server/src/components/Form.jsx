import { useEffect, useRef, useState } from "react"
import UserData from "./UserData"

const Form = () => {

    const userid = useRef()
    const username = useRef()
    const email = useRef()
    const phone = useRef()
    const pass = useRef()

    const addUser = (e) => {
        e.preventDefault()

        if (userid.current.value == "") {
            fetch("http://localhost:3000/users", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    "username": username.current.value,
                    "email": email.current.value,
                    "phone": phone.current.value,
                    "password": pass.current.value
                })
            })
        }else{
            fetch(`http://localhost:3000/users/${userid.current.value}`, {
                method: "put",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    "username": username.current.value,
                    "email": email.current.value,
                    "phone": phone.current.value,
                    "password": pass.current.value
                })
            })
        }
        userid.current.value = ""
        username.current.value = ""
        email.current.value = ""
        phone.current.value = ""
        pass.current.value = ""
    }


    const updateUser = (uid) => {
        fetch(`http://localhost:3000/users/${uid}`).then(resp => {
            return resp.json()
        }).then(result => {

            userid.current.value = result.id
            username.current.value = result.username
            email.current.value = result.email
            phone.current.value = result.phone
            pass.current.value = result.password

        }).catch(err => {
            console.log(err);

        })
    }

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users").then(resp => {
            return resp.json()
        }).then(result => {
            setUsers(result);

        }).catch(err => {
            console.log(err);

        })
    }, [addUser])

    return <div className="container">
        <div className="row">
            <div className="col-4 card mt-3 p-3">
                <h1>User Registration</h1>
                <hr />
                <form action="" onSubmit={addUser}>
                    <input type="hidden" ref={userid} />
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" ref={username} placeholder="Enter username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" ref={email} placeholder="Enter Email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" ref={pass} placeholder="Enter password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" ref={phone} placeholder="Enter phone" className="form-control" />
                    </div>

                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" className="btn btn-primary m-2">Reset</button>
                    </div>
                </form>
            </div>
            <div className="col-1"></div>
            <div className="col-7 card mt-3 p-3">
                <h1 align="center">User Details</h1>
                <hr />
                <table>
                    <thead className="table">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(ele => <UserData key={ele.id} users={ele} updateUser={updateUser}></UserData>)}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Form