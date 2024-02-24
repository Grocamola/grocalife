
interface TaskThumbnailProps {
    title: string;
    description: string;
}

const TaskThumbnail: React.FC<TaskThumbnailProps> = ({ title, description }) => {
    return ( 
        <div className="taskThumbnail">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>SEE MORE</button>
        </div>
     );
}

export default TaskThumbnail;