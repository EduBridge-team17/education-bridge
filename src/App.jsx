// import { useState } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import NgoDashboard from './pages/ngo/NgoDashboard';
import CreateLesson from './pages/teacher/CreateLesson';
import StudentCoursesDashboard from './pages/student/StudentCoursesDashboard'
import SubjectDetail from './pages/student/SubjectDetail'
import TopicDetail from './pages/student/TopicDetail'
import LessonReader from './pages/student/LessonReader'
import LessonComplete from './pages/student/LessonComplete'
import PracticeIntro from './pages/student/PracticeIntro'
import QuizSession from './pages/student/QuizSession'
import OfflineScreen from './pages/student/OfflineScreen';
import AiTutor from './pages/student/AiTutor';

import Resource from './pages/teacher/Resource';
import UploadStep from './pages/teacher/UploadContent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />

        <Route path='/student-dashboard' element={<StudentDashboard />} />
        <Route path='/student-courses-dashboard' element={<StudentCoursesDashboard />} />
        <Route path='/student-subject/:subjectId' element={<SubjectDetail />} />
        <Route path='/student-topic/:subjectId/:topicId' element={<TopicDetail />} />
        <Route path='/student-lesson/:subjectId/:topicId/:lessonId' element={<LessonReader />} />
        <Route path='/student-lesson-complete/:subjectId/:topicId/:lessonId' element={<LessonComplete />} />
        <Route path='/subject-detail/:subjectId' element={<SubjectDetail />} />
        <Route path="/student-practice/:subjectId/:topicId"      element={<PracticeIntro />} />
        <Route path="/student-quiz-session/:subjectId/:topicId"  element={<QuizSession />} />
        <Route path="/student-offline" element={<OfflineScreen />} />
        <Route path="/student-ai-tutor" element={<AiTutor />} />


        <Route path='/ngo-dashboard' element={<NgoDashboard />} />
        <Route path='/teacher/upload' element={<Resource />} />
        <Route path='/teacher/create-quiz' element={<UploadStep />} />
        <Route path='/teacher/create-lesson' element={<CreateLesson />} />
      </Routes>
    </>
  );
}

export default App;
