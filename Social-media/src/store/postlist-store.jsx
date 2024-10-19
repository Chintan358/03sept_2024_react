import { createContext, useReducer } from "react";

export const PostListcontext = createContext()

const postListReducer = (currentstate,action)=>{

}



const PostListContextProvider = ({children})=>{
    const [postlist,postListDispacher] = useReducer(postListReducer,DEFALT_POSTS)

    const addPost = ()=>{

    }

    const removePost = ()=>{

    }
    return <PostListcontext.Provider value={{postlist,addPost,removePost}}>
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