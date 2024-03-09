import { TaskContext } from '../display-tasks/displaytodo'
import { useContext } from 'react';
import styles from'./modifiedtask.module.css';

function EditDelete()
{   
    const {status,displaytasks,setDisplayTasks,setTasksArray}=useContext(TaskContext);
    const deleteTask=function(val)
    {
         const updatedTask =displaytasks.filter((task,index) =>val!==index);
         setDisplayTasks(updatedTask);
         setTasksArray(updatedTask);
    }
    const editTask=function(index)
    {
        const editedValue = prompt("Edit Your Value");
        if(editedValue !==null && editedValue.trim() !=="")
        {
            setDisplayTasks(prevTasks=>
                {
                    const updatedTask=[...prevTasks];
                    updatedTask[index]=editedValue;
                    setTasksArray(updatedTask);
                    return updatedTask;
                }
            )
        }
    }
    return(
        <>
         <div className={styles.bottom_container}>
            {
                status &&(
                   displaytasks.length>0 ? (
                    displaytasks.map((task,index)=>(
                        <div className={styles.task_list_container} key={index}>
                        <div className={styles.task_list} key={index}>
                        <h1 className={styles.task}>{(task.toLowerCase())}</h1>
                        <div className={styles.button_container}>
                        <button className={styles.edit_button} onClick={()=>editTask(index)} >Edit</button>
                        <button className={styles.delete_button}onClick={()=>deleteTask(index)}>Delete</button>
                        </div>
                        </div>
                        </div>)
                   )):<p>No tasks to display.</p>
                )
            }
        </div>
        </>
    )
}
export default EditDelete;