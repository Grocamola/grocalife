// import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { TaskCard } from "./components/utils/_Classes/taskClasses";


function App() {

  const task1 = new TaskCard({id: 1001, creator: 'user1', createdate: [2024, 1, 1]})
  task1.getCardData()
  
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/summary" element={<div></div>} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
