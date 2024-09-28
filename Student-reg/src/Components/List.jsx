import StList from "./StList"


const List = ({students,onRemovebuttonClick})=>{

    return <div className="container mt-3">
        <div className="row">
            <div className="col-12">
            <table className="table">
                <tr>
                    <th>Username</th>
                    <th>email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>

                {students.map(student=><StList key={student.name} student={student} removeHandler={onRemovebuttonClick}></StList>)}
               


            </table>
            </div>
            
        </div>        
    </div>
}

export default List