import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListcontext } from "../store/postlist-store";

const Posts = ({posts})=>{

    const {removePost,addLikes} = useContext(PostListcontext)

    return <div className="card post-card" style={{width: "50%"}}>
   
    <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>removePost(posts.id)}>
    <MdDelete />
    
  </span>
      <h5 className="card-title">{posts.title}</h5>
      <p className="card-text">{posts.body}</p>
      <span class="badge text-bg-primary m-2" onClick={()=>addLikes(posts.id)}>Likes {posts.likes}</span>
      <span class="badge text-bg-info">Comments {posts.comments}</span>
    </div>
  </div>
}

export default Posts