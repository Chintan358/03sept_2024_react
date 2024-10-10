import { useContext } from "react"
import { TodoItemContext } from "../store/Todo-Item-store"


const Items = ({todoname,tododate})=>{

    const {RemoveButtonClickHandler} = useContext(TodoItemContext)

    return <div className="container mt-5">
        <div className="row">
         <div className="col-4"> <span>{todoname}</span></div>
        <div className="col-4"><span>{tododate}</span></div>
        <div className="col-4"><button className="btn btn-danger" onClick={()=>RemoveButtonClickHandler(todoname)}>Remove</button></div>
        </div>
    </div>
}

export default Items