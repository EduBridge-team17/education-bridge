import { useState } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import NgoDashboard from './pages/ngo/NgoDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />

        <Route path='/student-dashboard' element={<StudentDashboard />} />
        <Route path='/ngo-dashboard' element={<NgoDashboard />} />
      </Routes>
    </>
  );
}

export default App;
