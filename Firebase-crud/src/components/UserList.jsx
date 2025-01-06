
import { db } from '../components/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const UserList = ({ cuser, editUser, deleteUser }) => {


    return <tr>
        <td>{cuser.uname}</td>
        <td>{cuser.email}</td>
        <td>{cuser.phone}</td>
        <td><button className="btn btn-danger" onClick={e => deleteUser(cuser.id)}>Delete</button></td>
        <td><button className="btn btn-primary" onClick={e => editUser(cuser.id)} >Edit</button></td>
    </tr>
}

export default UserList