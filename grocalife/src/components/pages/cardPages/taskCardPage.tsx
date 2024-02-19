import '../../styles/cards.css'
import NewTaskCard from '../../utils/taskCard/newTaskCard';

const TaskCardPage = () => {
    return ( 
        <>
            <div className="taskCardPage">
                <NewTaskCard />
            </div>
        </>
     );
}
 
export default TaskCardPage;