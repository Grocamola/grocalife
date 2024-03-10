import { TaskCard, TaskStatus } from '../_Classes/taskClasses';

import '../../styles/cards.css'
import { useState } from 'react';


type TaskThumbnailProps = { 
    task: TaskCard;
}

const TaskThumbnail = ({task} : TaskThumbnailProps) => {
    console.log(task.getCardData().status)
    const [descShow, setDescShow] = useState(false)

    return ( 
        <div className="taskThumbnail" onMouseEnter={() => setDescShow(true)} onMouseLeave={() => setDescShow(false)}>
            <p className="taskThumbnail__title">{task.title}</p>
            <p style={{marginTop: 20, display: descShow ? "block": "none"}}>{task.description}</p>
            <div className="taskThumbnailBtns">
                <button style={{display: task.getCardData().status !== TaskStatus.NotStarted ? "inline-block" : "none"}}>NOT STARTED</button>
                <button style={{display: task.getCardData().status !== TaskStatus.InProgress ? "inline-block" : "none"}}>IN PROGRESS</button>
                <button style={{display: task.getCardData().status !== TaskStatus.Completed ? "inline-block" : "none"}}>DONE</button>
            </div>
            
        </div>
     );
}
 
export default TaskThumbnail;