import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { displayuser, updateuser, userById } from "../features/userDetailSlide";

const Edit = () => {

    const location = useLocation()
    const id = location.state.id;
    const [eusers, seteusers] = useState()
    const navigate = useNavigate()
    const { users } = useSelector((state) => state.app)
    const data = users.find((ele) => ele.id == id)

    const dispatch = useDispatch()

    const uid = useRef()
    const name = useRef()
    const email = useRef()
    const age = useRef()
    const gender1 = useRef()
    const gender2 = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        var g = "";
        if (gender1.current.checked) {
            g = gender1.current.value
        }
        else if (gender2.current.checked) {
            g = gender2.current.value
        }

        dispatch(updateuser({ id: uid.current.value, name: name.current.value, email: email.current.value, age: age.current.value, gender: g }))
        // dispatch(updateuser(eusers))
        navigate("/display")
    }


    useEffect(() => {
        // seteusers(data)
        uid.current.value = data.id
        name.current.value = data.name
        email.current.value = data.email
        age.current.value = data.age
        gender1.current.checked = data.gender === "male"
        gender2.current.checked = data.gender === "female"

    }, [data])

    // const getUsers = (e) => {
    //     seteusers({ ...eusers, [e.target.name]: e.target.value })
    // }

    return <form className="w-50 mx-auto card p-5 mt-3" onSubmit={submitHandler}>
        <input type="hidden" name="id" ref={uid} />
        <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" ref={name} name="name" />
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" name="email" ref={email} />
        </div>
        <div class="mb-3">
            <label class="form-label">Age</label>
            <input type="text" class="form-control" name="age" ref={age} />
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" value="male" ref={gender1} />
            <label class="form-check-label">
                Male
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" value="female" ref={gender2} />
            <label class="form-check-label">
                Female
            </label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
}

export default Edit