
const WelcomeMessage = ({fetchpostshandler})=>{
    return <center><h1>There is no posts.</h1>
            <button className="btn btn-success" onClick={fetchpostshandler}>View all post</button>
    </center>
}

export default WelcomeMessage