import { useRef } from "react"

const Mail = ()=>{

    const to = useRef()
    const subject = useRef()
    const body = useRef()

   
    const mailHandler = async (e)=>{


        e.preventDefault()
        const data = {
            to : to.current.value,
            subject:subject.current.value,
            text:body.current.value
        }
        const resp =  await fetch("https://paymentserver-lbze.onrender.com/mail",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        alert(resp)
        console.log(resp);
        
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-8 card mx-auto mt-3 p-5">
                    <h1>Compose Mail</h1>
                   <form onSubmit={mailHandler}>
                    <div className="form-group">
                        <label htmlFor="">To</label>
                        <input type="text"  ref={to} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Subject</label>
                        <input type="text"  ref={subject} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Body</label>
                        <textarea type="text" ref={body}  className="form-control" />
                    </div>
                    <br />
                    <input type="submit" className="btn btn-success" />
                    </form>
                </div>
            </div>
        </div>

    
    </>
}

export default Mail