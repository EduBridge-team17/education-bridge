import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';

const LessonComplete = () => {
  const navigate = useNavigate();
  const { subjectId = 'math', topicId = 'algebra', lessonId = 'linear-equations' } = useParams();
  const [show, setShow] = useState(false);

  const user = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const firstName = user.fullName ? user.fullName.split(' ')[0] : 'Chidi';

  useEffect(() => {
    // Stagger entrance
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-sm">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] placeholder-gray-400 focus:outline-none" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold">
              {user.fullName ? user.fullName.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() : 'CO'}
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
          </div>
        </header>

        {/* Completion content */}
        <main className="flex-1 overflow-y-auto flex items-center justify-center px-6 py-12">
          <div
            className={`w-full max-w-sm text-center transition-all duration-700
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Confetti / celebration icon */}
            <div className="relative mb-4">
              {/* Decorative party icons */}
              <div className="absolute -top-2 left-8 opacity-30">
                <Icon icon="mdi:party-popper" width={32} className="text-orange-400 rotate-[-20deg]" />
              </div>
              <div className="absolute -top-2 right-8 opacity-30">
                <Icon icon="mdi:party-popper" width={32} className="text-teal-400 rotate-[20deg] scale-x-[-1]" />
              </div>
            </div>

            {/* Pill badge */}
            <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-orange-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Icon icon="mdi:check-circle" width={12} />
              Lesson Complete
            </div>

            {/* Heading */}
            <h1 className="text-[28px] font-extrabold text-gray-900 mb-1">
              Great job, <span className="text-orange-500">{firstName}!</span>
            </h1>
            <p className="text-[13px] text-gray-400 mb-7">
              You've successfully completed{' '}
              <span className="font-semibold text-gray-600">"Introduction to Linear Equations"</span>.
            </p>

            {/* Student illustration */}
            <div className="w-36 h-36 rounded-full bg-orange-50 border-4 border-orange-100 mx-auto mb-7 flex items-center justify-center overflow-hidden">
              <Icon icon="mdi:account-circle" width={112} className="text-orange-200" />
            </div>

            {/* Time spent card */}
            <div className="bg-white border border-gray-100 rounded-2xl py-4 px-6 mb-7 inline-flex flex-col items-center w-full">
              <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center mb-2">
                <Icon icon="mdi:clock-outline" width={18} className="text-orange-400" />
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Time Spent</p>
              <p className="text-[26px] font-extrabold text-gray-900">15 mins</p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => navigate(`/student-practice/${subjectId}/${topicId}`)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-2xl text-[14px] transition-colors"
              >
                Start Practice
              </button>
              <button
                onClick={() => navigate(`/student-topic/${subjectId}/${topicId}`)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-2xl text-[14px] transition-colors"
              >
                Next Lesson
              </button>
            </div>

            <p className="text-[10px] text-gray-300 mt-6">
              © 2024 Education Bridge Nigeria. Empowering every student, everywhere.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LessonComplete;