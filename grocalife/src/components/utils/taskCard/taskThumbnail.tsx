import { useEffect, useState } from "react";
import { Task } from "../_interfaces/TaskInterfaces";
import { StatusTypes } from "../_Classes/taskClasses";
// import { useNavigate } from "react-router-dom";

interface TaskThumbnailProps {
    taskInfo: Partial<Omit<Task, 'startTask' | 'setTitle' | 'setDescription'>>;
}

const TaskThumbnail: React.FC<TaskThumbnailProps> = ({ taskInfo }) => {

    const [cardEditMode, setCardEditMode] = useState(false)
    const [taskData, setTaskData] = useState(taskInfo)

    // const navigate = useNavigate()

    const goToTaskHandler = () => { 
        // navigate('/task-card/1001')
        setCardEditMode(prev => !prev)
    }

    const statusChange = (e: StatusTypes['taskTypes']) => { 
        // console.log(e)
        const taskInfoTemp = taskData
        taskInfoTemp.status = e;
        setTaskData(taskInfoTemp)
        // console.log(taskData)
    }


    useEffect(() => {},[taskData])

    return ( 
        <div className={`taskThumbnail taskCards ${cardEditMode ? 'editableTask' : 'notEditableTask'}`}>
            <div className='taskThumbnail_smallbox'>
                <div className='taskThumbnail_content'>
                    <h2>{taskInfo.title}</h2>
                    <p>{taskInfo.description}</p>
                </div>
            
            <button onClick={goToTaskHandler}>{!cardEditMode ? 'EDIT' : 'SAVE'}</button>
            </div>
            <div className='taskThumbnail_extraDetail' style={{display: !cardEditMode ? 'none' : 'block'}}>
                <p>Current status: {taskInfo.status}</p>
                <button onClick={() => statusChange('completed')}>COMPLETE</button>
                <button onClick={() => statusChange('blocked')}>BLOCKED</button>
                <button onClick={() => statusChange('archived')}>ARCHIVED</button>
            </div>
        </div>
     );
}

export default TaskThumbnail;