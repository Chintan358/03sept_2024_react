import UserList from "./UserList"

const ViewUser = ({ users,editUser,deleteUser }) => {

    return <div className="col-7 card mt-3 p-3">
        <h1 align="center">User Details</h1>
        <hr />
        <table className="table">
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {users.map(ele => <UserList key={ele.id} cuser={ele} editUser={editUser} deleteUser={deleteUser}></UserList>)}
        </table>
    </div>
}

export default ViewUser