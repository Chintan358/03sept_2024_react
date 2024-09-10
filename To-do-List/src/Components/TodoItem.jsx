import Items from "./Items"


const TodoItem = ({todolist})=>{
    return  <>
        {todolist.map(element=><Items key={element.name} todoname={element.name} tododate={element.date}></Items>)}
    </>
    
    
 
}

export default TodoItem