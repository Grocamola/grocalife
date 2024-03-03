import { useNavigate } from "react-router-dom";
import TaskThumbnail from "../../utils/taskCard/taskThumbnail";


import TaskData from '../../utils/dummy_data/dummy_tasks.json'
import '../../styles/summaryPages.css';
import { useDateCalculator } from "../../utils/_Hooks/date";


const TaskSummaryPage = () => {

    const navigate = useNavigate();
    const {year, month, day} = useDateCalculator()


    const todaysTasks = TaskData.tasks.filter(el => el.duedate.every((value, index) => value === [year, month, day][index]))
    const belatedTasks = TaskData.tasks.filter(el => el.duedate[0] < year || el.duedate[0] === year && el.duedate[1] < month || el.duedate[0] === year && el.duedate[1] === month && el.duedate[2] < day);

    return ( 
        <div className="taskSummaryPage--content">
            <div className="taskSummary--content--dashboard">
                <h2>Tasks and todos</h2>
                <button onClick={() => navigate('/task-card/1001')}>ADD NEW TASK</button>
            </div>
            <div className="taskSummary--content-result">
                <h2>Due date today:</h2><br /><hr />
                <div className="taskSummary--content-result-block">
                    {todaysTasks.map((task, index) => 
                        <TaskThumbnail 
                            taskInfo={task} 
                            key={index} 
                        />
                    )}
                </div>
                <br /><br />
                <h2>Due date passed:</h2><br /><hr />
                <div className="taskSummary--content-result-block">
                    <div className="taskSummary--content-result-block">
                        {belatedTasks.map((task, index) => 
                            <TaskThumbnail 
                                taskInfo={task}
                                key={index} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TaskSummaryPage; 
