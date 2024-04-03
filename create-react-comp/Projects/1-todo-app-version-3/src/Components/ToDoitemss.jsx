import ToDoItems from "./ToDoItems";
const TodoItemss = ({ todoitems,handleDeleteItem }) => {
  return (
    <div>
      {todoitems.map((element) => (
        <ToDoItems key={element.name} todoName={element.name} todoDate={element.date} handleDeleteItem={handleDeleteItem}></ToDoItems>
      ))}
    </div>
  );
};

export default TodoItemss;
