import style from './todo.module.css';
function ToDoItems({todoName,todoDate}){
  return(        <div className={`${style['kg-row']} row`}>
  <div className="col-6">{todoName}
  </div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2"><button type="button" className={`${style['kg-button']} btn btn-danger`}>Delete</button></div>
</div>)
}
export default ToDoItems