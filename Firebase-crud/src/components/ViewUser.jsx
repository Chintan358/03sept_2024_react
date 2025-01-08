import { useState } from "react"
import UserList from "./UserList"
import Loading from "./Loading"

const ViewUser = ({ users, editUser, deleteUser, loading }) => {




    return <div className="col-7 card mt-3 p-3">
        <h1 align="center">User Details</h1>
        <hr />
        <table className="table">
            <tr>

                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>

            {loading ? <Loading></Loading> : users.map(ele => <UserList key={ele.id} cuser={ele} editUser={editUser} deleteUser={deleteUser}></UserList>)}



        </table>
    </div>
}

export default ViewUser