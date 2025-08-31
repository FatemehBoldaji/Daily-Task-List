import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import './TaskItems.css'
import { TaskContext } from "./TaskContext"

export const TaskItems = () => {
    const { tasksList, setTasksList, setEditableTask, taskFilter} = useContext(TaskContext)

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id !== id))
    }

    const toggleComplete = (id) => {
        setTasksList(tasksList.map((task) => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    };

    const filteredTasks = tasksList.filter(task=>{
        if(taskFilter === "active") return !task.completed;
        if(taskFilter === "completed") return task.completed;
        return true;
    });


    return (
        <React.Fragment>
            {
                filteredTasks.length === 0 ? (
                    <p className="no-task-warning">No tasks yet !</p>
                ) : (
                    filteredTasks.map((task) =>
                    (
                        <div className="container" key={task.id} style={{ borderTop: task === filteredTasks[0] ? "none" : "1px solid var(--item-hover)" }}>
                            <div className="task-items">
                                <input className="task-item-checkbox" type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
                                <label className="task-item-title">{task.title}</label>
                            </div>
                            <div className="task-icons">
                                <FontAwesomeIcon className="edit-icon" icon={faPen} onClick={() => setEditableTask(task)} />
                                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTask(task.id)} />
                            </div>
                        </div>
                    )
                    )
                )
            }
        </React.Fragment>
    )
}