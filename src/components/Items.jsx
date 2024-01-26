import Item from "./item";
const Items = ({ data }) => {

    return (
        <div>
            {
                data.map((item) => <Item name={item.name} date={item.dueDate} />)
            }
        </div>
    )
}
export default Items;