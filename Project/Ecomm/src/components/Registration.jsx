import { useRef } from "react"
import { Link } from "react-router-dom"

const Registration = () => {

    const uname = useRef()
    const email = useRef()
    const phone = useRef()
    const pass = useRef()
    const cpass = useRef()

    const addUser = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/users", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username: uname.current.value,
                email: email.current.value,
                pass: pass.current.value,
                phone: phone.current.value
            })
        }).then(resp => {
            return resp.json()
        }).then(data => {

            if (data) {
                alert("Registration success")
            }

        }).catch(err => {
            console.log(err);

        })


        uname.current.value = ""
        email.current.value = ""
        phone.current.value = ""
        pass.current.value = ""
        cpass.current.value = ""

    }

    return <><div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100px" }}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">User Registration</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0"><Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
        <div className="container-fluid pt-5">

            <div className="row px-xl-5">
                <div className="col-lg-5 mb-5 mx-auto">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form onSubmit={addUser}>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" ref={uname} placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" ref={email} placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="password" className="form-control" id="pass" ref={pass} placeholder="Password"
                                    required="required" data-validation-required-message="Please enter a password" />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="control-group">
                                <input type="password" className="form-control" id="cpass" ref={cpass} placeholder="Confirm Password"
                                    required="required" data-validation-required-message="Please enter a confirm password" />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="control-group">
                                <input type="text" className="form-control" id="phone" ref={phone} placeholder="Phone"
                                    required="required" data-validation-required-message="Please enter a Phone" />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div></>
}


export default Registration