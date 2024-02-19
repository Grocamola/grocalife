import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../classes/taskClasses";
import dummyTasks from '../dummy_data/dummy_tasks.json'

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

const NewTaskCard = () => {

    const navigate = useNavigate();
    const [tasks, setTasks] = useState<Task[]>(dummyTasks.tasks);

    const addNewTask = () => {
        const Task = new Card(1001, 'typescript', 'learn typescript today', 'not-started');
        const newTaskData = Task.showData;
        setTasks(prevTasks => [...prevTasks, newTaskData]);
    };
    useEffect(() => {
        
    }, [tasks])

    return ( 
        <div className="taskCard">
            <h1>Task</h1>
            <p>Task name: Create Typescript project</p>
            <p>Description: Build a functional Typescript task manager</p>
            <p>Time neede: 10 pomodoro</p>
            <button>Edit</button>
            <button onClick={() => addNewTask()}>Save</button>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
     );
}
 
export default NewTaskCard;