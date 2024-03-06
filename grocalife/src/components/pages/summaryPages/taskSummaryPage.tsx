import { useNavigate } from "react-router-dom";
import { TaskCard } from "../../utils/_Classes/taskClasses";

type summaryProps = {
    task: TaskCard
}

const TaskSummaryPage = ({task} : summaryProps) => {
    const navigate = useNavigate()

    const GoToTaskPageHandler = () => { 
        navigate("/create-new-task");
    }
    return ( 
        <>
            <p>Hello, this is my first page</p><br />
            <button onClick={GoToTaskPageHandler}>New Task</button>
            <p>{task.title}</p>
        </>
    );
}
 
export default TaskSummaryPage;