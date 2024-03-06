import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "../_Classes/taskClasses";

import "../../styles/cards.css";

type FormData = {
  title: string;
  description: string;
  startDate: [number, number, number];
};

type newTaskProps = {
  addNewTask: (data: TaskCard) => void;
};

const NewTaskCard = (props: newTaskProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    startDate: [0, 0, 0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [yearInput, monthInput, dayInput] = value.split("-").map(Number);

    if (name === "startDate") {
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

    // Handle form submission, you can access form data in formData object
    const task1 = new TaskCard({
      id: 1001,
      creator: "user1",
      createdate: formData.startDate,
      title: formData.title,
      description: formData.description,
    });
    const data = task1.getCardData();
    console.log(data);
    props.addNewTask(task1);
    navigate("/");
  };

  return (
    <>
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
            <label className="taskFormLabel" htmlFor="startDate">
              Starting Date:
            </label>
            <div className="taskFormInput">
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={
                  formData.startDate[0] === 0
                    ? ""
                    : `${formData.startDate[0]}-${formData.startDate[1]
                        .toString()
                        .padStart(2, "0")}-${formData.startDate[2]
                        .toString()
                        .padStart(2, "0")}`
                }
                onChange={handleChange}
              />
              <span className="open-button">📅</span>
            </div>
          </div>
          <button className="button-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTaskCard;
