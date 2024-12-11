const UserData = ({ users, updateUser }) => {

    const deleteUser = (uid) => {

        fetch(`http://localhost:3000/users/${uid}`, {
            method: "delete"
        }).then(resp=>{
     
        })

    }
    return <tr>
        <td>{users.id}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <td>{users.phone}</td>
        <td><button className="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</button></td>
        <td><button className="btn btn-primary" onClick={()=>updateUser(users.id)}>Update</button></td>
    </tr>
}


export default UserData