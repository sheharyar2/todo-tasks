import EditDelete from '../modified-task/modifiedtask';
import { useContext,} from 'react';
import { TaskContext } from '../display-tasks/displaytodo';
import styles from './search.module.css';

function Searchtask()
{   
    const {tasks,newTask,setNewTask,status,setStatus,setTasksArray,displaytasks,setDisplayTasks}=useContext(TaskContext);
    const addTask=function()
    {   
        if(newTask){
            if(newTask.trim)
            {
                setDisplayTasks((task)=>[...task,newTask]);
                setTasksArray((task)=>[...task,newTask]);
            }
           
        }
        setNewTask("");
    }
    const searchTask=function(searchValue)
    {

        let updatedList =[...displaytasks];
        updatedList =updatedList.filter(task=>task.toLowerCase().indexOf(searchValue.toLowerCase()) !==-1)
        if(searchValue.length === 0)
        {
            setDisplayTasks(tasks);
        }
        else{
            setStatus(true);
            setDisplayTasks(updatedList);
        }
    }
    return<>
        <div className={styles.top_container}>
            <div className={styles.heading_container}>
                <h1 className={styles.heading}>DAILY TASKS</h1>
            </div>
            <div className={styles.input_container}>
                <input className={styles.todo_search} type="text"  onChange={(event)=>searchTask(event.target.value)} placeholder="Search Your Tasks..." />
                <button className={styles.show_tasks_button} onClick={()=>setStatus(!status)}>Show/Hide</button>
            </div>
            <div className={styles.input_container}>
                <input className={styles.todo_add} type="text" value={newTask} placeholder="Add Task ...." onChange={(event)=>setNewTask(event.target.value)} />
                <button className={styles.add_tasks_button} onClick={()=>addTask()}>Add Task</button>
            </div>
        </div>
        <EditDelete />
    </>
}
export default Searchtask;