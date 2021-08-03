import {useState} from "react";

export default function ToDoForm({addTask}) {

    const [newTask, setNewTask] = useState('')

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask("")
    }

    const handleKayPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
            <form onSubmit={handleSubmit} className="form">
                <input type="text"
                       value={newTask}
                       onChange={handleChange}
                       onKeyDown={handleKayPress}
                       placeholder="Enter something..."
                />
                <button>ADD</button>
            </form>
    )
}