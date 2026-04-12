import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Survey from './pages/Survey'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './index.css'

function App() {
  return (
    <div className="appShell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
