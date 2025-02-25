import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteuser, displayuser } from "../features/userDetailSlide"
import { useNavigate } from "react-router-dom"

const Display = () => {


    const navigate = useNavigate()
    const { users, loading } = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const [filter, setfilter] = useState()
    const [filteredUsers, setFilteredUsers] = useState([])
    const [search, setsearch] = useState()
    useEffect(() => {
        if (search) {

            setFilteredUsers(users.filter((ele) => ele.name.toLowerCase().startsWith(search) && ele.gender === filter))
        }
        else if (filter) {

            setFilteredUsers(users.filter((ele) => ele.gender === filter))
        }
        else {
            setFilteredUsers(users)
        }
    }, [users, filter, search])


    const searchHandler = (e) => {

        setsearch(e.target.value.toLowerCase())
    }


    const filterHandler = (e) => {
        setfilter(e.target.value)
    }

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
                    <div>
                        <input type="radio" className="m-2" name="gender" value={"male"} onClick={filterHandler} />Male
                        <input type="radio" className="m-2" name="gender" value={"female"} onClick={filterHandler} />Female
                    </div>
                    <input type="text" placeholder="Search" onKeyUp={searchHandler} />
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
                        {filteredUsers.map(ele => <tr>
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