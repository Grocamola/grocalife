import { useState } from "react";
import { TaskCard } from "../_Classes/taskClasses";

import '../../styles/cards.css'


type FormData = {
    title: string;
    description: string;
    startDate: [number, number, number];
  };

const NewTaskCard = () => {



    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        startDate: [0, 0, 0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const [yearInput, monthInput, dayInput] = value.split('-').map(Number);


        if(name === 'startDate') { 
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
            creator: 'user1', 
            createdate: formData.startDate, 
            title: formData.title, 
            description: formData.description
        })
        const data = task1.getCardData()
        console.log(data)
      };
      
    return ( 
        <>
            <div className="newTaskFormBox">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate">Starting Date:</label>
                        <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate[0] === 0 ? '' : `${formData.startDate[0]}-${formData.startDate[1].toString().padStart(2, '0')}-${formData.startDate[2].toString().padStart(2, '0')}`}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
     );
}
 
export default NewTaskCard;