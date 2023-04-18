import LandingPage from './Pages/LandingPage'
import StudentHome from './Pages/StudentHome'
import AdminHome from './Pages/AdminHome'
import SchedulerPage from './Pages/SchedulerPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/Home' element={<StudentHome/>}></Route>
          <Route path='/AdminHome' element={<AdminHome/>}></Route>
          <Route path='/SchedulerPage' element={<SchedulerPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
