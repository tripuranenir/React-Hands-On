import ToDoItems from "./ToDoItems";
const TodoItemss = ({ todoitems }) => {
  return (
    <div>
      {todoitems.map((element) => (
        <ToDoItems todoName={element.name} todoDate={element.date}></ToDoItems>
      ))}
    </div>
  );
};

export default TodoItemss;
