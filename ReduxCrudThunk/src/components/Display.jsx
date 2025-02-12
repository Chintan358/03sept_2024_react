import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteuser, displayuser } from "../features/userDetailSlide"
import { useNavigate } from "react-router-dom"

const Display = () => {


    const navigate = useNavigate()
    const { users, loading } = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch(deleteuser(id))
    }
    useEffect(() => {
        dispatch(displayuser())
    }, [])



    if (loading) {
        return <h1>Loading..</h1>
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto card mt-3 p-5">
                    <h1 align='center'>User Details</h1>
                    <hr />
                    <table className="table">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>age</th>
                            <th>Gender</th>
                            <th colSpan={2}>Action</th>

                        </tr>
                        {users.map(ele => <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.age}</td>
                            <td>{ele.gender}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteUser(ele.id)}>Delete</button></td>
                            <td><button className="btn btn-primary" onClick={() => navigate(`/edit`, { state: { id: ele.id } })}>Edit</button></td>
                        </tr>)}
                    </table>
                </div>
            </div>
        </div>
    </>
}


export default Display