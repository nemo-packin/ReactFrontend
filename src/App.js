import LandingPage from './Pages/LandingPage'
import StudentHome from './Pages/StudentHome'
import AdminHome from './Pages/AdminHome'
import SchedulerPage from './Pages/SchedulerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './Components/RequireAuth'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>

          {/* Protected routes */}
          <Route element={<RequireAuth userType='student'></RequireAuth>}>
            <Route path='/StudentHome' element={<StudentHome />}></Route>
            <Route path='/SchedulerPage' element={<SchedulerPage />}></Route>
          </Route>
          <Route element={<RequireAuth userType='admin'></RequireAuth>}>
            <Route path='/AdminHome' element={<AdminHome />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
