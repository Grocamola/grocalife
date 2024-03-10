import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { TaskCard } from "../_Classes/taskClasses";

import "../../styles/cards.css";
import { useDateCalculator } from "../_Hooks/date";


type TaskFormData = {
  title: string;
  description: string;
  startDate: [number, number, number];
  dueDate: [number, number, number]
};

type newTaskProps = {
  setTaskList(updateFunction: (prev: TaskCard[]) => TaskCard[]): void;
  setDisplay(arg: boolean):void
};



const NewTaskCard = (props: newTaskProps) => {
  // const navigate = useNavigate();
  const {year, month, day} = useDateCalculator()

  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    startDate: [0, 0, 0],
    dueDate: [0,0,0]
  });

  const [previewMode, setPreviewMode] = useState<boolean>(false)
  const [error, setError] = useState<'none' | 'date' | 'title'>('none')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [yearInput, monthInput, dayInput] = value.split("-").map(Number);

    if (name === "dueDate" || name === "startDate") {
      setFormData((prevData) => ({ ...prevData, [name]: [yearInput, monthInput, dayInput] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(formData.startDate.every((value, index) => value === [0, 0, 0][index])) { 
      setFormData((prevData) => ({ ...prevData, ['startDate']: [year, month, day],}))
    }
    if(formData.dueDate.every((value, index) => value === [0, 0, 0][index])) { 
      setFormData((prevData) => ({ ...prevData, ['dueDate']: [year, month, day],}))
    }

    if(formData.title.length < 2) { 
      setError('title')
      throw new Error ('Please fill out the title.')
    } else if (formData.dueDate[0] !== 0 || formData.startDate[0] !== 0 && (formData.dueDate[0] <= formData.startDate[0] || 
      formData.dueDate[0] === formData.startDate[0] && formData.dueDate[1] <= formData.startDate[1] ||
      formData.dueDate[0] === formData.startDate[0] && formData.dueDate[1] === formData.startDate[1] && formData.dueDate[2] <= formData.startDate[2])) { 
        setError('date')
        throw new Error ('Please check dates.')
    } else {
      setPreviewMode(prev => !prev)
      setError('none')
    }
  };

  const taskSaveHandler = () => {
    const task1 = new TaskCard({
      id: 1001,
      creator: "user1",
      createdate: formData.startDate,
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate
    });

    const data = task1.getCardData();

    props.setTaskList(prev => [...prev, task1]);
    setFormData({
      title: "",
      description: "",
      startDate: [0, 0, 0],
      dueDate: [0,0,0]
    })
    console.log(data);
    setPreviewMode(false)
    props.setDisplay(false)
    // navigate('/')
  }

  const taskDataDeleteHandler = () => { 
    setFormData({
      title: "",
      description: "",
      startDate: [0, 0, 0],
      dueDate: [0,0,0]
    })
    setPreviewMode(prev => !prev)
  }


  return (
    <>
      <div className="newTaskFormBox">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="taskFormLabel" htmlFor="title">Title:</label>
            <input type="text" className="taskFormInput" id="title" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <p style={{fontSize: '0.8rem', color: 'red', display: error === 'title' ? 'block' : 'none'}}>Please fill the title</p>
          <div>
            <label className="taskFormLabel" htmlFor="description">Description:</label>
            <textarea id="description" name="description" className="taskFormInput" value={formData.description} onChange={handleChange} />
          </div>
          <div className="dateInput">
            <label className="taskFormLabel" htmlFor="startDate">Starting Date:</label>
            <div className="taskFormInput">
              <input type="date" id="startDate" name="startDate" value={formData.startDate[0] === 0 ? "" :
                       `${formData.startDate[0]}-${formData.startDate[1].toString().padStart(2, "0")}-${formData.startDate[2].toString().padStart(2, "0")}`} 
                       onChange={handleChange}
              />
              <span className="open-button">📅</span>
            </div>
          </div>
          <p style={{fontSize: '0.8rem', color: 'red', display: error === 'date' ? 'block' : 'none'}}>Please check starting date.</p>
          <div className="dateInput">
            <label className="taskFormLabel" htmlFor="dueDate">Due Date:</label>
            <div className="taskFormInput">
              <input type="date" id="dueDate" name="dueDate" value={formData.dueDate[0] === 0 ? "" :
                       `${formData.dueDate[0]}-${formData.dueDate[1].toString().padStart(2, "0")}-${formData.dueDate[2].toString().padStart(2, "0")}`} 
                       onChange={handleChange}
              />
              <span className="open-button">📅</span>
            </div>
          </div>
          <p style={{fontSize: '0.8rem', color: 'red', display: error === 'date' ? 'block' : 'none'}}>Please check your due date.</p>
          <button className="button-light" type="submit" style={{display: !previewMode ? 'flex': 'none', margin: '20px auto'}}>SUBMIT</button>
          <button className="button-light" type="button" style={{ display: previewMode ? 'flex' : 'none', margin: '20px auto' }} disabled={error && true} onClick={() => setPreviewMode(prev => !prev)}>EDIT</button>
        </form>
          {previewMode && <>
            <div className="taskPreview" style={{display: previewMode ? 'flex': 'none'}}>
                  <p>Title: {formData.title}</p>
                  <p>Description: {formData.description}</p>
                  <p>Starting date: {formData.startDate[0]} - {formData.startDate[1]} - {formData.startDate[2]}</p>
                  <p>Due date: {formData.dueDate[0]} - {formData.dueDate[1]} - {formData.dueDate[2]}</p>
                  <p>Status: Not Started</p>
            </div>
            <div className="taskPreviewBtns" style={{display: previewMode ? 'flex': 'none'}}>
              <button onClick={taskSaveHandler}>SAVE</button>
              <button onClick={taskDataDeleteHandler}>DELETE</button>
            </div>
          </>}
        </div>
    </>
  );
};

export default NewTaskCard;
