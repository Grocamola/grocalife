import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskSummaryPage from "./components/pages/summaryPages/taskSummaryPage";
import { TaskCard } from "./components/utils/_Classes/taskClasses";

import './App.css'


function App() {

  const taskZero = new TaskCard({id: 1001, creator: 'user', createdate: [2024,1,1],dueDate:[2024,1,1], cardFeature: 'task', title: '', description: ''})
  const [taskList, setTaskList] = useState<TaskCard[]>([taskZero])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskSummaryPage tasks={taskList} addNewTask={setTaskList} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
