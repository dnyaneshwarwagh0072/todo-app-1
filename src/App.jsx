import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items';
import ToDoTitle from './components/ToDoTitle';
import ToDoAdd from './components/ToDoAdd';

function App() {
  const data = [
    {
      name: "Birthday",
      dueDate: "01/08/1991"
    },
    {
      name: "Buy Milk",
      dueDate: "22/01/2024"
    },
    {
      name: "BE in Computer Science",
      dueDate: "July-2017"
    },
    {
      name: "TiGER",
      dueDate: "01/08/1991"
    }
  ]
  return (
    <center className='todo-main-container'>
      <ToDoTitle />
      <div class="container text-center">
        <div className="todo_container">
          <ToDoAdd />
        </div>
        <div className="todo_container">
          <Items data={data} />
        </div>
      </div>
    </center>
  )
}

export default App
