import { useNavigate } from "react-router-dom";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";
import '../../styles/summaryPages.css';


const TaskSummaryPage = () => {

    const navigate = useNavigate();

    return ( 
        <div className="taskSummaryPage--content">
            <div className="taskSummary--content--dashboard">
                <button onClick={() => navigate('/task-card/1001')}>ADD NEW TASK</button>
            </div>
            <div className="taskSummary--content-result">
                <TaskThumbnail />
                <TaskThumbnail />
            </div>
        </div>
     );
}
 
export default TaskSummaryPage;