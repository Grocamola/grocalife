import { TaskCard } from '../_Classes/taskClasses';
import { useState } from 'react';
import { TaskStatus } from '../_interfaces/TaskInterfaces';

import '../../styles/cards.css'


type TaskThumbnailProps = { 
    task: TaskCard;
}

const TaskThumbnail = ({task} : TaskThumbnailProps) => {
    // console.log(task.getCardData().status)
    const [descShow, setDescShow] = useState(false)

    const taskStatusChange = (e: string) => {
        console.log(e)
        console.log(task)
        //send the task with new status to backend
    }

    


    return ( 
        <div className="taskThumbnail" onMouseEnter={() => setDescShow(true)} onMouseLeave={() => setDescShow(false)}>
            <p className="taskThumbnail__title">{task.title}</p>
            <p style={{marginTop: 20, display: descShow ? "block": "none"}}>{task.description}</p>
            <div className="taskThumbnailBtns">
                <button style={{display: task.getCardData().status !== TaskStatus.NotStarted ? "inline-block" : "none"}} onClick={() => taskStatusChange('notstarted')}>NOT STARTED</button>
                <button style={{display: task.getCardData().status !== TaskStatus.InProgress ? "inline-block" : "none"}} onClick={() => taskStatusChange('inprogress')}>IN PROGRESS</button>
                <button style={{display: task.getCardData().status !== TaskStatus.Completed ? "inline-block" : "none"}} onClick={() => taskStatusChange('completed')}>DONE</button>
            </div>
            
        </div>
     );
}
 
export default TaskThumbnail;