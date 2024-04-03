import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItems from "./Components/ToDoItems";
import './App.module.css';
import TodoItemss from "./Components/ToDoitemss";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const ar=[{name:'Buy Milk', date:'4/10/2023'},{name:'Go To Collge',date:'4/10/2022'}];
  const [itemsList,setItemsList]=useState(ar);
  const handleAddItem=(newItem,newDate)=>{
    let item={name:newItem, date:newDate};
    console.log(item);
    let newList=[...itemsList,item]
    setItemsList(newList)
    console.log(itemsList);
    }

  const handleDeleteItem=(itemName)=>{
    console.log(`item name is ${itemName}`);
    let filteredList=itemsList.filter(item=>item.name!=itemName);
    setItemsList(filteredList)
  }
  return (
    <center className="todo-container">
      <AppName/>
      <div className="container text-center">
        <AddToDo handleAddItem={handleAddItem}></AddToDo>
        {itemsList.length==0 && <WelcomeMsg ></WelcomeMsg>}
        <div className='items-container'>
        <TodoItemss todoitems={itemsList} handleDeleteItem={handleDeleteItem}></TodoItemss>
        </div>
      </div>
    </center>
  );
}

export default App;
