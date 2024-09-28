

const StList = ({student,removeHandler})=>{
    return  <tr>
    <td>{student.name}</td>
    <td>{student.email}</td>
    <td>{student.phone}</td>
    <td><button className="btn btn-danger" onClick={()=>{removeHandler(student.name)}}>Delete</button></td>
</tr>
}

export default StList