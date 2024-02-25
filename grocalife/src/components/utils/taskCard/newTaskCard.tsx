import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../_Classes/taskClasses";
import { Task } from "../_interfaces/TaskInterfaces";
import { useDateCalculator } from "../_Hooks/date";
import Tasks from '../dummy_data/dummy_tasks.json'


const NewTaskCard = () => {
    

    const {year, month, day} = useDateCalculator()
    const navigate = useNavigate();

    const newTask : Task = new Card(1001, "", "", 'not-started', [0, 0, 0], [0, 0, 0], [0, 'initial'],[0,''])

    
    const [formData, setFormData] = useState({title: '', description: ''})
    const [taskEdit, setTaskEdit] = useState<boolean>(true)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => { 
        event.preventDefault();
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const previewHandler = () => { 
        setTaskEdit(false)
        newTask.setTitle(formData.title);
        newTask.setDescription(formData.description);
        console.log(newTask.showData())
    }

    const addNewTask =  (e: React.FormEvent) => {
        e.preventDefault()
        newTask.startTask([year, month, day])
        newTask.setTitle(formData.title);
        newTask.setDescription(formData.description);
        console.log(newTask.showData())
        console.log([...Tasks.tasks, newTask.showData()])
        
        // ---------- sending data to backend ---------- 

        setFormData({title: '', description: ''})
        setTaskEdit(true)
        navigate('/')
    }


    return ( 
        <div className="taskCard">
            <h1>Task</h1>
            <form onSubmit={addNewTask}>
                <label>Title</label><br />
                <input disabled={!taskEdit} className={taskEdit ? 'inputActive' : 'inputDeactive'} name="title" value={formData.title} onChange={inputChangeHandler} /><br />
                <label>Description</label><br />
                <input disabled={!taskEdit} className={taskEdit ? 'inputActive' : 'inputDeactive'} name="description" value={formData.description} onChange={inputChangeHandler} /><br />

                {!taskEdit && <button onClick={() => setTaskEdit(true)}>Edit</button>}
                {taskEdit && <button type="button" disabled={formData.title.length === 0} onClick={previewHandler}>Preview</button>}
                <br /><br />
                {!taskEdit && <>
                    <p>Preview:</p><br />
                        <div className="TaskConfig">
                            {formData.title.length > 0 && <h3>{formData.title}</h3>}
                            {formData.description.length > 0 && <p className="TaskConfig--desc">{formData.description}</p>}
                            <p className="TaskConfig--status">Status: "not started"</p>
                            <p className="TaskConfig--status">Starting: once you save.</p> 
                        </div>
                        
                    </>
                }
                {formData.title && !taskEdit && <>
                    <button type="submit">Save</button>
                    <button onClick={() => navigate('/')}>Back</button></>}
            </form>
        </div>
     );
}
 
export default NewTaskCard;