import style from './Input.module.css'

const Input = ({inputHandler})=>{

    return <input type="text" placeholder="Enter Foodname" className={style.input} onKeyUp={inputHandler}/>
}

export default Input