import {useState} from 'react'
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";


function ToDo() {
    const [todos, setTodos] = useState([])

    const addTask = (newTask) => {
        if (newTask) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: newTask,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)],)
    }
    const toggleTask = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }

    return (
        <div className="wr">
            <h1>TODOS LIST {todos.length}</h1>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <ToDoItem key={todo.id}
                              todo={todo}
                              toggleTask={toggleTask}
                              removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}


export default ToDo;


