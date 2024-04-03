function ToDoItems1(){
  let todoname='Buy Milk';
  let todoDate='4/10/2023'
  return(        <div class="row kg-row">
  <div class="col-6">{todoname}
  </div>
  <div class="col-4">{todoDate}</div>
  <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
</div>)
}
export default ToDoItems1