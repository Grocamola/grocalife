import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskSummaryPage from "./components/pages/summaryPages/taskSummaryPage";
import { TaskCard } from "./components/utils/_Classes/taskClasses";
import NewTaskCard from "./components/utils/taskCard/newTaskCard";

import './App.css'


function App() {

  const task1 = new TaskCard({id: 1001, creator: 'user1', createdate: [2024, 1, 2]})
  task1.getCardData()
  
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
