import { useState } from "react";
import Item from "./item";

const FoodItems=({items})=>{
  let [activeItems,setActiveItems]=useState([]);
  let handleBuyButton=(item)=>{{console.log(`you bought ${item}`); let newlist=[...activeItems,item];setActiveItems(newlist)}}
return(<>
  <ul className="list-group">
  {items.map((item)=><Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyButton={()=>{handleBuyButton(item)}} ></Item>)}
  </ul>
</>);
}
export default FoodItems;