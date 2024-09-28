import style from './Items.module.css'


const Items = ({itemname,flag,BuyButtonHandler,removeButtonHandler,removeHandler})=>{

    return  <li className={`list-group-item mt-3 ${flag?"active":""}`}>{itemname} {flag?<button className={`btn btn-danger ${style.bbtn}`} onClick={()=>removeButtonHandler(itemname)}>Remove</button>:<button className={`btn btn-primary ${style.bbtn}`} onClick={()=>BuyButtonHandler(itemname)}>Buy</button>} <button className={`btn btn-warning ${style.bbtn}`} onClick={()=>removeHandler(itemname)}>Delete</button></li>
    
}

export default Items