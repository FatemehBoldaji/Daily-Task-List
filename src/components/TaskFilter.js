import { useContext } from 'react'
import './TaskFilter.css'
import { TaskContext} from './TaskContext'

export const TaskFilter =()=>{

    const {setTaskFilter} = useContext(TaskContext)
    return(
        <>
            <div className="filter-container">
                <button className='all-btn' onClick={()=>setTaskFilter("all")}>All</button>
                <button className='active-btn' onClick={()=>setTaskFilter("active")}>Active</button>
                <button className='completed-btn' onClick={()=>setTaskFilter("completed")}>Completed</button>
            </div>
        </>
    )
}