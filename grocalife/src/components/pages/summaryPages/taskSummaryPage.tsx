import { useNavigate } from "react-router-dom";

const TaskSummaryPage = () => {
    const navigate = useNavigate()

    const GoToTaskPageHandler = () => { 
        navigate("/create-new-task");
    }
    return ( 
        <>
            <p>Hello, this is my first page</p><br />
            <button onClick={GoToTaskPageHandler}>New Task</button>
        </>
    );
}
 
export default TaskSummaryPage;