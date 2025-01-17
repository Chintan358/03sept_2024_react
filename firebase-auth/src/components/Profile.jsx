import { useEffect, useState } from "react"
import { auth, db } from './firebase'
import { } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import Loading from "../components/Loading"

const Profile = () => {

    const [userprofile, setuserprofile] = useState()

    const getuserdata = async () => {
        auth.onAuthStateChanged(async (user) => {




            if (user == null) {
                window.location.href = "/"
            }


            if (user.displayName == null) {

                const userdata = await getDoc(doc(db, "users", user.uid))

                if (userdata.exists()) {



                    setuserprofile(userdata.data())
                }
                else {


                    setuserprofile({ fname: "dffd" })
                }
            }
            else {


                const str = user.displayName.split(" ")
                setuserprofile({ email: user.email, fname: str[0], lname: str[1] })
            }

        })
    }

    const userlogout = async () => {
        await auth.signOut()
        window.location.href = "/"
    }

    useEffect(() => {
        getuserdata()
    }, [])

    return <div className="row">
        {userprofile ? <div className="col-4 mx-auto card mt-5 p-3" >
            <h1>Welcome , {userprofile.fname} </h1>
            <h2>Firstname : {userprofile.fname}</h2>
            <h2>Lastname : {userprofile.lname}</h2>
            <h2>Email : {userprofile.email}</h2>
            <button className="btn btn-danger" onClick={userlogout}>Logout</button>
        </div> : <Loading></Loading>}

    </div>

}

export default Profile