import { useDispatch } from "react-redux"
import { createuser } from "../features/userDetailSlide"
import { useState } from "react"

const Create = () => {

    const [users, setUsers] = useState({})

    const getUsers = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users);

    }

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createuser(users))
    }

    return <>
        <form className="w-50 mx-auto card p-5 mt-3" onSubmit={submitHandler}>
            <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control" name="name" onChange={getUsers} />
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" onChange={getUsers} />
            </div>
            <div class="mb-3">
                <label class="form-label">Age</label>
                <input type="text" class="form-control" name="age" onChange={getUsers} />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" value="male" onChange={getUsers} />
                <label class="form-check-label">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" value="female" onChange={getUsers} />
                <label class="form-check-label">
                    Female
                </label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </>
}

export default Create