import React, { useContext, useEffect, useState } from "react"
import './AddTask.css'
import { TaskContext } from "./TaskContext"
import { toast } from 'react-toastify'

export const AddTask = () => {

    const [newTask, setNewTask] = useState("")
    const [isShow, setIsShow] = useState(false)
    const { tasksList, setTasksList, editableTask, setEditableTask } = useContext(TaskContext)

    const handleTasks = (newTask) => {

        const task = newTask.trim();
        if (!task) {
            toast.warning("Task cannot be empty");
            return
        }

        const isDuplicate = tasksList.some(t => t.title === task)
        if (isDuplicate) {
            toast.error("Task already exists!");
            return
        }

        if (editableTask !== null) {
            setTasksList(prev => (prev.map(t => (t.id === editableTask.id ? {...t, title: task} : t))))
            toast.success("Task edited!")
            setEditableTask(null)
            setIsShow(!isShow)
            setNewTask("")
            return
        }

        const newItem = {
            id: Date.now(),
            title: task,
            completed: false
        };
        setTasksList([...tasksList, newItem])
        toast.success("Task added!");
        setNewTask("")
    }

    useEffect(() => {
        if (editableTask !== null) {
            setNewTask(editableTask.title)
            setIsShow(true)
        }
        else
            setNewTask("")

    }, [editableTask])

    const showToggle = ()=>{
        setIsShow(!isShow)
        if(editableTask !== null & !isShow){
            setNewTask("")
            setEditableTask(null)
        }
        
    }

    return (
        <div className="add-task">
            {isShow &&
                (
                    <>
                        <input className="add-task-input" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter your task" />
                        <button className="add-task-btn" onClick={() => handleTasks(newTask)}>{editableTask ? "Edit" : "Add"}</button>
                    </>
                )}
            <button className="add-task-btn toggle-btn" onClick={() => showToggle()}>{isShow ? "Close" : "Add Task"}</button>

        </div>
    )
}