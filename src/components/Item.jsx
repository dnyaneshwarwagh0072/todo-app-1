function Item({name,date}) {
    
    return (
        <div class="row items-container">
            <div class="col-5">
                <h5>{name}</h5>
            </div>
            <div class="col-5">
                <h5>{date}</h5>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger kg-btn">Delete</button>
            </div>
        </div>
    )
}
export default Item;