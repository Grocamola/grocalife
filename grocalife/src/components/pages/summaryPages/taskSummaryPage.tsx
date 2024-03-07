import { useNavigate } from "react-router-dom";
import { TaskCard } from "../../utils/_Classes/taskClasses";

import '../../styles/summaryPages.css'
import Navbar from "../../Elements/navbar";

type summaryProps = {
    task: TaskCard
}

const TaskSummaryPage = ({task} : summaryProps) => {
    const navigate = useNavigate()

    const GoToTaskPageHandler = () => { 
        navigate("/create-new-task");
    }
    return ( 
        <div className="TaskSummaryPage">
            <Navbar />
            <p>Hello, this is my first page</p><br />
            <button onClick={GoToTaskPageHandler}>New Task</button>
            <p>{task.title}</p>
        </div>
    );
}
 
export default TaskSummaryPage;