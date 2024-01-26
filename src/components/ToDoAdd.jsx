function ToDoAdd() {
    return (
        <div class="row items-container">
            <div class="col-5">
                <input type="text" placeholder="Enter ToDo here" />
            </div>
            <div class="col-5">
                <input type="date" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-success kg-btn">Add</button>
            </div>
        </div>
    )
}
export default ToDoAdd;