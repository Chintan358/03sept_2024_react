import { useDispatch } from "react-redux"
import { deleteuser, userbyid } from "../features/crud/crudSlice"
import { useNavigate } from "react-router-dom"
const Data = ({ users }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteHandler = (userid) => {
        dispatch(deleteuser(userid))
    }

    const updateHandler = (userid) => {
        dispatch(userbyid({ uid: userid, "navigate": navigate }))
    }


    return <tr className="">
        <td>{users.uname}</td>
        <td>{users.email}</td>
        <td>{users.phone}</td>
        <td><button className="btn btn-danger" onClick={() => deleteHandler(users.id)} >Delete</button></td>
        <td><button className="btn btn-primary" onClick={() => updateHandler(users.id)}>Update</button></td>
    </tr>
}

export default Data