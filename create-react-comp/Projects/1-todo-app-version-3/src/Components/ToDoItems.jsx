import style from './todo.module.css';
import { MdDelete } from "react-icons/md";
function ToDoItems({todoName,todoDate,handleDeleteItem}){
  return(        <div className={`${style['kg-row']} row`}>
  <div className="col-6">{todoName}
  </div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2"><button type="button" className={`${style['kg-button']} btn btn-danger`}onClick={()=>handleDeleteItem(todoName)}><MdDelete/></button></div>
</div>)
}
export default ToDoItems