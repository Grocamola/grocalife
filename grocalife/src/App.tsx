import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskCardPage from "./components/pages/cardPages/taskCardPage";
import TaskSummaryPage from "./components/pages/summaryPages/taskSummaryPage";
import NewTaskCard from "./components/utils/taskCard/newTaskCard";

import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/summary" element={<TaskSummaryPage />} />
          <Route path="/new-task-card" element={<NewTaskCard />} />
          <Route path="/task-card/:taskId" element={<TaskCardPage />} />
          <Route path="/" element={<TaskSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
