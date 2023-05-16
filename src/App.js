import LandingPage from './Pages/LandingPage'
import StudentHome from './Pages/StudentHome'
import AdminHome from './Pages/AdminHome'
import SchedulerPage from './Pages/SchedulerPage'
import RegisterPage from './Pages/RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './Components/Authentication/RequireAuth'
import NavBar from './Components/NavBar'
import './index.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/Register' element={<RegisterPage/>}></Route>

          {/* Protected routes */}
          <Route element={<RequireAuth userType='student'></RequireAuth>}>
            <Route path='/StudentHome' element={<StudentHome />}></Route>
            <Route path='/CourseSearch' element={<SchedulerPage />}></Route>
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
