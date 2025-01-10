import { useRef } from "react"
import { Link } from "react-router-dom"
import { auth, db } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'



const Reg = () => {


    const fname = useRef()
    const lname = useRef()
    const email = useRef()
    const pass = useRef()


    const registeruser = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
        const user = auth.currentUser
        if (user) {
            await setDoc(doc(db, "users", user.uid), { fname: fname.current.value, lname: lname.current.value, email: email.current.value })
        }

    }


    return <div className="row">
        <div className="col-5 mx-auto card p-3 mt-3">
            <h2 align="center">User Registration</h2>
            <hr />
            <form action="" onSubmit={registeruser}>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" ref={fname} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" ref={lname} className="form-control" />
                </div>
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
            <span><Link to="/">Alredy Registered? Login here</Link></span>
        </div>
    </div>
}


export default Reg