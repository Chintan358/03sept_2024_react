import { useState } from "react"
import Items from "./Items"

const FoodItems = ({fooditems})=>{

    let [activeele,setactiveele] = useState([])

    const BuyButtonHandler = (item)=>{
        let newItem = [...activeele,item]
        setactiveele(newItem)
    }

    return <ul className="list-group">
        {fooditems.map(ele=> <Items key={ele} itemname={ele} flag={activeele.includes(ele)}BuyButtonHandler={BuyButtonHandler}></Items>)}
       
     </ul>
}

export default FoodItems