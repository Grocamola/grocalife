import { useNavigate } from "react-router-dom";

interface TaskThumbnailProps {
    title: string;
    description: string;
}

const TaskThumbnail: React.FC<TaskThumbnailProps> = ({ title, description }) => {

    const navigate = useNavigate()
    const goToTaskHandler = () => { 
        navigate('/task-card/1001')
    }

    return ( 
        <div className="taskThumbnail taskCards">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
            <button onClick={goToTaskHandler}>SEE MORE</button>
        </div>
     );
}

export default TaskThumbnail;