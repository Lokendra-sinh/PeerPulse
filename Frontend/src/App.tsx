
import Homepage from './Components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentorLogin from './Components/Mentor/Login';
import StudentLogin from './Components/Student/Login';

function App() {

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/mentor/login" element={<MentorLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />  
      </Routes>
    </Router>
  )
}

export default App
