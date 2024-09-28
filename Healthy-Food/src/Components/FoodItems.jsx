import { useState } from "react"
import Items from "./Items"

const FoodItems = ({fooditems,removeHandler})=>{

    let [activeele,setactiveele] = useState([])

    const BuyButtonHandler = (item)=>{
        let newItem = [...activeele,item]
        setactiveele(newItem)
    }

    const removeButtonHandler = (item)=>{

        let updateList =  activeele.filter(ele=>ele!=item)
        setactiveele(updateList)

    }

    return <ul className="list-group">
        {fooditems.map(ele=> <Items key={ele} itemname={ele} flag={activeele.includes(ele)} BuyButtonHandler={BuyButtonHandler} removeButtonHandler={removeButtonHandler} removeHandler={removeHandler}></Items>)}
       
     </ul>
}

export default FoodItems