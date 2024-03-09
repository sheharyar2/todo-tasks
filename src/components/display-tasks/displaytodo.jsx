import { createContext, useState } from "react";
import styles from'./display.module.css';
import Searchtask from "../search-add/search-task";

export const TaskContext = createContext(null);
function DisplayTodo()
{   
    const [newTask,setNewTask]=useState("");
    const [status,setStatus] = useState(true);
    const [displaytasks,setDisplayTasks] =useState("");
    const [tasks,setTasksArray]=useState("");

    return(
       <div className={styles.container}>

        <TaskContext.Provider value ={{
        newTask,setNewTask,status,setStatus,displaytasks,setDisplayTasks,tasks,setTasksArray
       }}>
        <Searchtask />
        </TaskContext.Provider>
       </div>
    )
}
export default DisplayTodo;