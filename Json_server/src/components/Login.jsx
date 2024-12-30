import { useRef } from "react"


const Login = () => {

    const email = useRef()
    const pass = useRef()

    const login = (e) => {
        e.preventDefault()
        const enteredEmail = email.current.value
        const enteredPass = pass.current.value

        fetch(`http://localhost:3000/users?email=${enteredEmail}&password=${enteredPass}`)
            .then(resp => {
                return resp.json()
            }).the  

                if (result.length == 0) {
                    alert("Invalid credentials")
                }
                else {
                    alert("Success !! welcome : " + result[0].username)
                }

            }).catch(err => {
                console.log(err);

            })

        email.current.value = ""
        pass.current.value = ""
    }

    return <div className="container">
        <div className="row">
            <div className="col-4 card mt-3 p-3 mx-auto">
                <h1>User Login</h1>
                <hr />
                <form action="" onSubmit={login}>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" ref={email} placeholder="Enter Email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" ref={pass} placeholder="Enter password" className="form-control" />
                    </div>



                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" className="btn btn-primary m-2">Reset</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
}

export default Login