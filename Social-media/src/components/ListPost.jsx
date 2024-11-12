import { useContext } from "react"
import Posts from "./Posts"
import { PostListcontext } from "../store/postlist-store"
import WelcomeMessage from "./WelcomeMessage"

const ListPost = ()=>{

    const {postlist,initPost} = useContext(PostListcontext)
   
    
    const fetchpostshandler = ()=>{
       
        fetch("https://dummyjson.com/posts").then(result=>{
            return result.json()
        }).then(data=>{
            initPost(data.posts);
        })
    }
    
    return <>
    {postlist.length===0 && <WelcomeMessage fetchpostshandler={fetchpostshandler}></WelcomeMessage>}
    {postlist.map((posts)=><Posts key={posts.id} posts={posts}></Posts>)}
    </>
}

export default ListPost