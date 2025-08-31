import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasksList, setTasksList] = useState(() => {
        const data = localStorage.getItem("Task-List")
        return data ? JSON.parse(data) : [];
    })
    useEffect(() => {
        localStorage.setItem("Task-List", JSON.stringify(tasksList))
    }, [tasksList])

    const [editableTask, setEditableTask] = useState(null)
    const [taskFilter, setTaskFilter] = useState("all")

    return (
        <TaskContext.Provider value={{ tasksList, setTasksList, editableTask, setEditableTask, taskFilter, setTaskFilter}}>{children}</TaskContext.Provider>
    )
}