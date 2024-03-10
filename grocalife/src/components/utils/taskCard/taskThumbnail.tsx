import { TaskCard, TaskStatus } from '../_Classes/taskClasses';

import '../../styles/cards.css'


type TaskThumbnailProps = { 
    task: TaskCard;
}

const TaskThumbnail = ({task} : TaskThumbnailProps) => {
    console.log(task.getCardData().status)
    return ( 
        <div className="taskThumbnail">
            <p className="taskThumbnail__title">{task.title}</p>
            <div className="taskThumbnailBtns">
                <button style={{display: task.getCardData().status !== TaskStatus.NotStarted ? "inline-block" : "none"}}>NOT STARTED</button>
                <button style={{display: task.getCardData().status !== TaskStatus.InProgress ? "inline-block" : "none"}}>IN PROGRESS</button>
                <button style={{display: task.getCardData().status !== TaskStatus.Completed ? "inline-block" : "none"}}>DONE</button>
            </div>
            
        </div>
     );
}
 
export default TaskThumbnail;