import { MdDelete } from "react-icons/md";

const Posts = ({posts})=>{
    return <div className="card post-card" style={{width: "50%"}}>
   
    <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />
    
  </span>
      <h5 className="card-title">{posts.title}</h5>
      <p className="card-text">{posts.body}</p>
      <span class="badge text-bg-primary m-2">Likes {posts.likes}</span>
      <span class="badge text-bg-info">Comments {posts.comments}</span>
    </div>
  </div>
}

export default Posts