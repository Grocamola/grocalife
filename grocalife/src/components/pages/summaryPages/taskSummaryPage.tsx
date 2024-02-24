import { useNavigate } from "react-router-dom";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";


import TaskData from '../../utils/dummy_data/dummy_tasks.json'
import '../../styles/summaryPages.css';


const TaskSummaryPage = () => {

    const navigate = useNavigate();

    return ( 
        <div className="taskSummaryPage--content">
            <div className="taskSummary--content--dashboard">
                <button onClick={() => navigate('/task-card/1001')}>ADD NEW TASK</button>
            </div>
            <div className="taskSummary--content-result">
                <h1>Urgents</h1><br /><hr />
                <div className="taskSummary--content-result-block">
                    {TaskData.tasks.map((task, index) => 
                        <TaskThumbnail 
                            title={task.title} 
                            description={task.description} 
                            key={index} 
                        />
                    )}
                </div>
                <br /><br />
                <h2>Upcomming Tasks - This week</h2><br /><hr />
                <div className="taskSummary--content-result-block">

                </div>
            </div>
        </div>
     );
}
 
export default TaskSummaryPage; 