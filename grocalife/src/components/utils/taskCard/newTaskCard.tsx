import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "../_Classes/taskClasses";
import Navbar from "../../Elements/navbar";

import "../../styles/cards.css";


type TaskFormData = {
  title: string;
  description: string;
  startDate: [number, number, number];
  dueDate: [number, number, number]
};

type newTaskProps = {
  addNewTask: (data: TaskCard) => void;
};



const NewTaskCard = (props: newTaskProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    startDate: [0, 0, 0],
    dueDate: [0,0,0]
  });
  const [previewMode, setPreviewMode] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [yearInput, monthInput, dayInput] = value.split("-").map(Number);

    if (name === "dueDate" || name === "startDate") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [yearInput, monthInput, dayInput],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewMode(prev => !prev)

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
    props.addNewTask(task1);

    const data = task1.getCardData();
    console.log(data);

    navigate('/')
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
      <Navbar />
      <div className="newTaskFormBox">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="taskFormLabel" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              className="taskFormInput"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="taskFormLabel" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="taskFormInput"
              value={formData.description}
              onChange={handleChange}
            />
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

          <button className="button-light" type="submit" style={{display: !previewMode ? 'flex': 'none', margin: '20px auto'}}>
            SUBMIT
          </button>
          <button className="button-light" type="button" style={{ display: previewMode ? 'flex' : 'none', margin: '20px auto' }} onClick={() => setPreviewMode(prev => !prev)}>
            EDIT
          </button>
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
