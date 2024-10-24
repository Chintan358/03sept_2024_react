import { useContext, useRef } from "react"
import { PostListcontext } from "../store/postlist-store"

const CreatePost = ()=>{

    const {addPost} = useContext(PostListcontext)

    const postId = useRef()
    const postTitle = useRef()
    const postBody = useRef()

    const handleSubmit = (e)=>{
       e.preventDefault()
      addPost(postId.current.value,postTitle.current.value,postBody.current.value)
      postId.current.value=""
      postTitle.current.value=""
      postBody.current.value=""
  
    }

    return <form className="col-6 m-auto card p-5 mt-2" onSubmit={handleSubmit}>
   
    <div className="mb-3">
      <label htmlFor="postId" className="form-label">Post Id</label>
      <input type="text" className="form-control" id="postId" ref={postId}/>
    </div>

    <div className="mb-3">
      <label htmlFor="postTitle" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="postTitle" ref={postTitle} />
    </div>

    <div className="mb-3">
      <label htmlFor="postBody" className="form-label">Post Body</label>
      <textarea type="text" className="form-control" id="postBody"ref={postBody} />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default CreatePost