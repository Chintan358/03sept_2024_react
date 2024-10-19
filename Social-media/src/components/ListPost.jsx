import { useContext } from "react"
import Posts from "./Posts"
import { PostListcontext } from "../store/postlist-store"

const ListPost = ()=>{

    const {postlist} = useContext(PostListcontext)
    
    
    return <>
    {postlist.map((posts)=><Posts key={posts.id} posts={posts}></Posts>)}
    </>
}

export default ListPost