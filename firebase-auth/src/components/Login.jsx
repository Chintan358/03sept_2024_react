import { useRef } from "react"
import { Link } from "react-router-dom"

import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {


    const email = useRef()
    const pass = useRef()

    const userlogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
            window.location.href = "profile"

        } catch (error) {
            console.log("Invalid credentials");


        }


    }


    return <div className="row">
        <div className="col-5 mx-auto card p-3 mt-3">
            <h2 align="center">User Login</h2>
            <hr />
            <form onSubmit={userlogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" ref={email} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="pass" id="pass" ref={pass} className="form-control" />
                </div>
                <br />
                <input type="submit" className="btn btn-success" />
            </form>
            <span><Link to="reg">New user? register here</Link></span>
        </div>
    </div>
}


export default Login