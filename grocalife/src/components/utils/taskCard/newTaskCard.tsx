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
    const [task, setTask] = useState<Task>({ id: 1001, title: '', description: '', status: 'not-started' });
    const [preview, setPreview] = useState<Task>({ id: 1001, title: '', description: '', status: 'not-started' })
    const [taskEdit, setTaskEdit] = useState<boolean>(true)
    const [tasks, setTasks] = useState<Task[]>(dummyTasks.tasks);

    const addNewTask = () => {
        const Task = new Card(task.id, task.title, task.description, 'not-started');
        const newTaskData = Task.showData;
        setTasks(prevTasks => [...prevTasks, newTaskData]);

        setTask({ id: 1001, title: '', description: '', status: 'not-started' })
    };

    const taskPreviewHandler = () => { 
        setTaskEdit(false)
        setPreview(task);
    }

    const taskEditHandler = () => {
        setTaskEdit(true)
        setPreview({ id: 1001, title: '', description: '', status: 'not-started' });
    }

    const taskUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTask(prevTask => ({ ...prevTask, [name]: value }));
    };

    useEffect(() => {
        console.table(task)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks])

    return ( 
        <div className="taskCard">
            <h1>Task</h1>
            {/* <p>Task name: Create Typescript project</p>
            <p>Description: Build a functional Typescript task manager</p>
            <p>Time neede: 10 pomodoro</p> */}
            <input disabled={!taskEdit} name="title" value={task.title} onChange={taskUpdateHandler} /><br />
            <input disabled={!taskEdit} name="description" value={task.description} onChange={taskUpdateHandler} /><br />
            {preview.title.length > 0 && <button onClick={taskEditHandler}>Edit</button>}
            <button onClick={taskPreviewHandler}>Preview</button>
            <br />
            {preview.title && <p>{preview.title}</p>}
            {preview.description && <p>{preview.description}</p>}
            {preview.title && <>
                <button onClick={() => addNewTask()}>Save</button>
                <button onClick={() => navigate('/')}>Back</button></>}
        </div>
     );
}
 
export default NewTaskCard;