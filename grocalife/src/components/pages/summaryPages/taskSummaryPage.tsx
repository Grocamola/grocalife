import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TaskCard } from "../../utils/_Classes/taskClasses";
import Navbar from "../../Elements/navbar";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";
import NewTaskCard from "../../utils/taskCard/newTaskCard";

import '../../styles/summaryPages.css'
import { useDateCalculator } from "../../utils/_Hooks/date";
import { TaskStatus } from "../../utils/_interfaces/TaskInterfaces";


type summaryProps = {
    tasks: TaskCard[];
    setTaskList(updateFunction: (prev: TaskCard[]) => TaskCard[]): void;
}

const TaskSummaryPage = ({tasks, setTaskList} : summaryProps) => {
    // const navigate = useNavigate()

    const {year, month, day} = useDateCalculator()

    const [addTaskStatus, setAddTaskStatus] = useState(false)

    const GoToTaskPageHandler = () => { 
        // navigate("/create-new-task");
        setAddTaskStatus(prev => !prev)
    }
    return ( 
        <div className="TaskSummaryPage">
            <Navbar />
            <button className="newTaskBtn" onClick={GoToTaskPageHandler}>New Task</button>
            <div style={{display: addTaskStatus ? 'block' : 'none'}}><NewTaskCard setTaskList={setTaskList} setDisplay={setAddTaskStatus}/></div>
            <div style={{height: 60}} />
            {/* <p>Hello, this is my first page</p><br /> */}
            <div className="taskColumns">
            <div className="taskSummaryContainer">
                <div className="taskNonNegiciables">
                <h2>Today's tasks</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask === year && monthTask === month && dayTask === day;
                    }).filter(el => el.getCardData().status !== TaskStatus.Completed).map(el => <TaskThumbnail task={el} />)} 
                </div>
                <div className="taskUpcomings">
                <h2>Upcoming tasks</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask > year || yearTask === year && monthTask > month || yearTask === year && monthTask === month && dayTask > day;
                    }).filter(el => el.getCardData().status !== TaskStatus.Completed).map(el => <TaskThumbnail task={el} />)} 
                </div>
                <div className="taskCompleteds">
                <h2>Completed ones. YAY!</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask === year && monthTask === month && dayTask === day;
                    }).filter(el => el.getCardData().status === TaskStatus.Completed).map(el => <TaskThumbnail task={el} key={el.title} />)} 
                </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default TaskSummaryPage;