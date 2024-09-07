
function List({stdata,clg,OnRemoveButtonclick})
{
    // let {stdata,clg} = props
   

    return <> <h3>Student List : {clg}</h3>
            <ul>
            {stdata.map((element)=><><li key={element}>{element} <button onClick={()=>OnRemoveButtonclick(element)}>Remove</button></li><br></br></>)}
            </ul>
            </>
}

export default List