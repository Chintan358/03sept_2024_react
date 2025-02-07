import { useSelector } from "react-redux"
import Data from "./Data"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Display = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users").then(data => {
            return data.json()
        }).then(result => {
            setusers(result)
        })
    })

    return <div className="container">
        <div className="row">
            <div className="col-8 card p-5 mx-auto mt-3">
                <h1>User Registration</h1>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(users => <Data key={users.id} users={users}></Data>)}
                    </tbody>
                </table>

                <Link to={"/"}>Add User</Link>
            </div></div></div>
}

export default Display