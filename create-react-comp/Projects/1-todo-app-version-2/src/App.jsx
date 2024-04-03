import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItems from "./Components/ToDoItems";
import './App.css';
import TodoItemss from "./Components/ToDoitemss";

function App() {
  const ar=[{name:'Buy Milk', date:'4/10/2023'},{name:'Go To Collge',date:'4/10/2022'},];
  return (
    <center className="todo-container">
      <AppName/>
      <div className="container text-center">
        <AddToDo/>
        <div className='items-container'>
        <TodoItemss todoitems={ar}></TodoItemss>
        </div>
      </div>
    </center>
  );
}

export default App;
