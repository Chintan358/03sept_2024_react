import Items from "./Items"


const TodoItem = ({todolist,onRemoveClick})=>{
    return  <>
        {todolist.map(element=><Items key={element.name} todoname={element.name} tododate={element.date} onRemoveClick={onRemoveClick}></Items>)}
    </>
    
    
 
}

export default TodoItem