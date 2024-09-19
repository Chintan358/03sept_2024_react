

const Items = ({todoname,tododate,onRemoveClick})=>{

    return <div className="container mt-5">
        <div className="row">
         <div className="col-4"> <span>{todoname}</span></div>
        <div className="col-4"><span>{tododate}</span></div>
        <div className="col-4"><button className="btn btn-danger" onClick={()=>onRemoveClick(todoname)}>Remove</button></div>
        </div>
    </div>
}

export default Items