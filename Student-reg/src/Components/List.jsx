import StList from "./StList"


const List = ({ students, onRemovebuttonClick, editHandler }) => {

    return <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <tr>
                        <th>Username</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th colSpan="2">Action</th>
                    </tr>

                    {students.map(student => <StList key={student.id} student={student} removeHandler={onRemovebuttonClick} editHandler={editHandler}></StList>)}



                </table>
            </div>

        </div>
    </div>
}

export default List