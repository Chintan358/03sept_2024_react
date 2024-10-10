import { useContext } from "react";
import { TodoItemContext } from "../store/Todo-Item-store";


const Demo = ()=>{

    const todolist =  useContext(TodoItemContext)
    return <>{todolist.map(ele=><h1>{ele.name}</h1>)} </>
}

export default Demo;