

const StList = ({ student, removeHandler, editHandler }) => {
    return <tr>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.phone}</td>
        <td><button className="btn btn-danger" onClick={() => { removeHandler(student.id) }}>Delete</button></td>
        <td><button className="btn btn-primary" onClick={() => { editHandler(student.id) }}>Edit</button></td>

    </tr>
}

export default StList