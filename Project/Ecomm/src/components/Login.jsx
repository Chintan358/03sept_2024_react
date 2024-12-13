import { Link } from "react-router-dom"

const Login = () => {

    return <><div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100px" }}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">User Login</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0"><Link to="/reg">Registration</Link></p>
            </div>
        </div>
    </div>
        <div className="container-fluid pt-5">

            <div className="row px-xl-5">
                <div className="col-lg-5 mb-5 mx-auto">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form>

                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="password" className="form-control" id="pass" placeholder="Password"
                                    required="required" data-validation-required-message="Please enter a password" />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div></>
}


export default Login