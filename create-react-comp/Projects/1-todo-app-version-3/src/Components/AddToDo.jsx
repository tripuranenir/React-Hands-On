import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddToDo({ handleAddItem }) {
  const [todoItem, setTodoItem] = useState("");
  const handleToDoItem = (event) => {
    setTodoItem(event.target.value);
    console.log(todoItem);
  };
  const [todoDate, setTodoDate] = useState("");
  const handleToDoDate = (event) => {
    setTodoDate(event.target.value);
    console.log(todoDate);
  };

  const addNewItem=(event)=>{
    event.preventDefault();
    handleAddItem(todoItem, todoDate);
            setTodoDate("");
            setTodoItem("");

  }

  return (
    <form class="row kg-row"  onSubmit={addNewItem}>
      <div class="col-6">
        <input
          type="text"
          value={todoItem}
          placeholder="Enter To Do Here"
          onChange={handleToDoItem}
        ></input>
      </div>
      <div class="col-4">
        <input type="date" value={todoDate} onChange={handleToDoDate}></input>
      </div>
      <div class="col-2">
        <button
          class="btn btn-success kg-button"
        >
          <MdAddBox></MdAddBox>
        </button>
      </div>
    </form>
  );
}

export default AddToDo;
