function AddToDo(){
  return(
    <div class="row kg-row">
    <div class="col-6">
      <input type='text' placeholder="Enter To Do Here"></input>
    </div>
    <div class="col-4"><input type="date"></input></div>
    <div class="col-2"><button type="button" class="btn btn-success kg-button">Add</button></div>
  </div>
  )
}

export default AddToDo;