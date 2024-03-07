import { useNavigate } from "react-router-dom";
import { TaskCard } from "../../utils/_Classes/taskClasses";
import Navbar from "../../Elements/navbar";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";


import '../../styles/summaryPages.css'


type summaryProps = {
    tasks: TaskCard[]
}

const TaskSummaryPage = ({tasks} : summaryProps) => {
    const navigate = useNavigate()

    const GoToTaskPageHandler = () => { 
        navigate("/create-new-task");
    }
    return ( 
        <div className="TaskSummaryPage">
            <Navbar />
            <p>Hello, this is my first page</p><br />
            <button onClick={GoToTaskPageHandler}>New Task</button>
            {tasks.slice(1).map(el => <TaskThumbnail task={el} />)}
        </div>
    );
}
 
export default TaskSummaryPage;