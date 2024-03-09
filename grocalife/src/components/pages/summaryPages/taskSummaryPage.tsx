import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TaskCard } from "../../utils/_Classes/taskClasses";
import Navbar from "../../Elements/navbar";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";
import NewTaskCard from "../../utils/taskCard/newTaskCard";

import '../../styles/summaryPages.css'


type summaryProps = {
    tasks: TaskCard[];
    addNewTask(updateFunction: (prev: TaskCard[]) => TaskCard[]): void;
}

const TaskSummaryPage = ({tasks, addNewTask} : summaryProps) => {
    // const navigate = useNavigate()

    const [addTaskStatus, setAddTaskStatus] = useState(true)

    const GoToTaskPageHandler = () => { 
        // navigate("/create-new-task");
        setAddTaskStatus(prev => !prev)
    }
    return ( 
        <div className="TaskSummaryPage">
            <Navbar />
            <button onClick={GoToTaskPageHandler}>New Task</button>
            <div style={{display: addTaskStatus ? 'block' : 'none'}}><NewTaskCard addNewTask={addNewTask}/></div>
            
            <p>Hello, this is my first page</p><br />
            <div className="taskSummaryContainer">
                {tasks.slice(1).map(el => <TaskThumbnail task={el} />)}
            </div>
            
        </div>
    );
}
 
export default TaskSummaryPage;