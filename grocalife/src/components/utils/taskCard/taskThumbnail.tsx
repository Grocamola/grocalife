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
        <div className="taskThumbnail">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={goToTaskHandler}>SEE MORE</button>
        </div>
     );
}

export default TaskThumbnail;