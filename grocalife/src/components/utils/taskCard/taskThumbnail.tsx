import { TaskCard } from '../_Classes/taskClasses';

import '../../styles/cards.css'


type TaskThumbnailProps = { 
    task: TaskCard;
}

const TaskThumbnail = ({task} : TaskThumbnailProps) => {
    return ( 
        <div className="taskThumbnail">
            <p className="taskThumbnail__title">{task.title}</p>
            <div className="taskThumbnailBtns">
                <button>IN PROGRESS</button>
                <button>DONE</button>
            </div>
            
        </div>
     );
}
 
export default TaskThumbnail;