import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TaskCard } from "../../utils/_Classes/taskClasses";
import Navbar from "../../Elements/navbar";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";
import NewTaskCard from "../../utils/taskCard/newTaskCard";

import '../../styles/summaryPages.css'
import { useDateCalculator } from "../../utils/_Hooks/date";


type summaryProps = {
    tasks: TaskCard[];
    addNewTask(updateFunction: (prev: TaskCard[]) => TaskCard[]): void;
}

const TaskSummaryPage = ({tasks, addNewTask} : summaryProps) => {
    // const navigate = useNavigate()

    const {year, month, day} = useDateCalculator()

    const [addTaskStatus, setAddTaskStatus] = useState(true)

    const GoToTaskPageHandler = () => { 
        // navigate("/create-new-task");
        setAddTaskStatus(prev => !prev)
    }
    return ( 
        <div className="TaskSummaryPage">
            <Navbar />
            <button className="newTaskBtn" onClick={GoToTaskPageHandler}>New Task</button>
            <div style={{display: addTaskStatus ? 'block' : 'none'}}><NewTaskCard addNewTask={addNewTask} setDisplay={setAddTaskStatus}/></div>
            <div style={{height: 60}} />
            {/* <p>Hello, this is my first page</p><br /> */}
            <div className="taskColumns">
            <div className="taskSummaryContainer">
                <div className="taskNonNegiciables">
                <h2>Today's tasks</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask === year && monthTask === month && dayTask === day;
                    }).map(el => <TaskThumbnail task={el} />)} 
                </div>
                <div className="taskUpcomings">
                <h2>Upcoming tasks</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask > year || yearTask === year && monthTask > month || yearTask === year && monthTask === month && dayTask > day;
                    }).map(el => <TaskThumbnail task={el} />)} 
                </div>
                <div className="taskUpcomings">
                <h2>Completed ones. YAY!</h2>
                   {tasks.slice(1).filter(task => {
                        const [yearTask, monthTask, dayTask] = task.dueDate;
                        return yearTask > year || yearTask === year && monthTask > month || yearTask === year && monthTask === month && dayTask > day;
                    }).map(el => <TaskThumbnail task={el} />)} 
                </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default TaskSummaryPage;