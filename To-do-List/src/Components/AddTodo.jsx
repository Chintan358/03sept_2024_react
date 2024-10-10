import { useContext, useState } from "react";
import { TodoItemContext } from "../store/Todo-Item-store";


const AddTodo = ()=>{

    const {AddButtonclickHandler} = useContext(TodoItemContext)

    let [name,setname] = useState("")
    let [date,setdate] = useState("")

    const onNameChange = (e)=>{
        setname(e.target.value)
    }

    const onDateChange = (e)=>{
        setdate(e.target.value)
    }

    const onButtonClick = ()=>{
        AddButtonclickHandler(name,date)
        setname("")
        setdate("")
    }

    return <div className="container">
    <div className="row">
    <div className="col-4">
    <input type="text" placeholder="Enter Your Task" className="form-control" value={name} onChange={onNameChange} />
    </div>
    <div className="col-4">
    <input type="Date" className="form-control" onChange={onDateChange} value={date} />
    </div>
    <div className="col-4">
    <button className="btn btn-success" onClick={onButtonClick}>Add</button>
    </div>
    </div>
  </div>
}

export default AddTodo