import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskSummaryPage from "./components/pages/summaryPages/taskSummaryPage";
import NewTaskCard from "./components/utils/taskCard/newTaskCard";

import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/create-new-task" element={<NewTaskCard />} />
          <Route path="/" element={<TaskSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
