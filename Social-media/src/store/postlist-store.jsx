import { createContext, useReducer } from "react";

export const PostListcontext = createContext()

const postListReducer = (currentstate,action)=>{
    if(action.type=="ADD_POST")
    {
        return [...currentstate,action.payload]
    }
    else if(action.type=="REMOVE_POST"){
        return currentstate.filter(post=>post.id!==action.payload)
    }
    else if(action.type=="ADD_LIKES"){
        return currentstate.map(post=>post.id===action.payload? {...post,likes:post.likes+1}:post)
    }
}

const PostListContextProvider = ({children})=>{
    const [postlist,postListDispacher] = useReducer(postListReducer,[])

    const addPost = (id,title,body)=>{
        
        const addPostData = {
            type : "ADD_POST",
            payload : {
                id,
                title,
                body,
                likes: 0,
                comments: 0
            }
        }
        postListDispacher(addPostData)
        
    }
    const removePost = (id)=>{
        const removePostData = {
            type : "REMOVE_POST",
            payload : id
        }
        postListDispacher(removePostData)
        
    }

    const addLikes = (id)=>{
        const addLikesData = {
            type : "ADD_LIKES",
            payload : id
        }
        postListDispacher(addLikesData)
        
    }

    return <PostListcontext.Provider value={{postlist,addPost,removePost,addLikes}}>
        {children}
    </PostListcontext.Provider>
}

let DEFALT_POSTS = [{
    id:1,
    title:"First Post",
    body:"This is the first post",
    likes: 10,
    comments: 5
},{
    id:2,
    title:"Second Post",
    body:"This is the second post",
    likes: 20,
    comments: 10
},{
    id:3,
    title:"Third Post",
    body:"This is the third post",
    likes: 5,
    comments: 0
}]


export default PostListContextProvider;