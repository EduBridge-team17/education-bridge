import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';

const practiceData = {
  algebra: {
    subject: 'Mathematics',
    subjectId: 'math',
    ss: 'SS2',
    topic: 'Algebraic Processes',
    questions: 10,
    estMins: 5,
    lastScore: 65,
    image: '/Images/student-practice.png',
  },
  geometry: {
    subject: 'Mathematics',
    subjectId: 'math',
    ss: 'SS2',
    topic: 'Geometry & Shapes',
    questions: 8,
    estMins: 4,
    lastScore: null,
    image: '/Images/student-practice.png',
  },
};

const PracticeIntro = () => {
  const navigate = useNavigate();
  const { subjectId = 'math', topicId = 'algebra' } = useParams();
  const data = practiceData[topicId] ?? practiceData.algebra;

  const user = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const initials = user.fullName ? user.fullName.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : 'CO';

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-200" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:bell-outline" width={18} className="text-gray-400" /></button>
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:web" width={18} className="text-gray-400" /></button>
            <span className="text-[12px] text-gray-600 font-medium">English</span>
            <Icon icon="mdi:chevron-up" width={16} className="text-gray-400" />
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold shrink-0">{initials}</div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
            <Icon icon="mdi:chevron-down" width={15} className="text-gray-400" />
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="px-6 py-2.5 flex items-center gap-1.5 text-[11px] text-gray-400 bg-white border-b border-gray-50">
          <button onClick={() => navigate(`/student-subject/${subjectId}`)} className="hover:text-teal-600 transition-colors">{data.subject}</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <span className="hover:text-teal-600 cursor-pointer">{data.ss}</span>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-topic/${subjectId}/${topicId}`)} className="hover:text-teal-600 transition-colors">{data.topic}</button>
        </div>

        {/* Main centered content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-10">

          {/* Card */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm w-full max-w-2xl p-8">
            <div className="flex items-center gap-10">

              {/* Left — student illustration */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-50">
                  <img
                    src={data.image}
                    alt="Student"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 24 24' fill='none' stroke='#d1d5db' stroke-width='1.5'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg></div>`;
                    }}
                  />
                </div>
                <div className="flex items-center gap-1.5 text-teal-600 text-[11px] font-semibold">
                  <Icon icon="mdi:wifi" width={13} />
                  Offline Ready
                </div>
              </div>

              {/* Right — info */}
              <div className="flex-1 min-w-0">
                <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight mb-2">
                  Ready to test your knowledge?
                </h1>
                <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                  You are about to start a practice session on{' '}
                  <span className="text-teal-600 font-semibold">{data.topic}.</span>{' '}
                  Take your time and focus. Good luck!
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex-1">
                    <Icon icon="mdi:clipboard-list-outline" width={20} className="text-teal-500 shrink-0" />
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Questions</p>
                      <p className="text-[15px] font-extrabold text-gray-900">{data.questions} Items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex-1">
                    <Icon icon="mdi:timer-outline" width={20} className="text-teal-500 shrink-0" />
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Est. Time</p>
                      <p className="text-[15px] font-extrabold text-gray-900">{data.estMins} Mins</p>
                    </div>
                  </div>
                </div>

                {/* Start button */}
                <button
                  onClick={() => navigate(`/student-quiz-session/${subjectId}/${topicId}`)}
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-[14px] py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  Start Practice <Icon icon="mdi:arrow-right" width={18} />
                </button>

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/student-topic/${subjectId}/${topicId}`)}
                    className="text-[12px] text-gray-400 hover:text-teal-600 transition-colors font-medium"
                  >
                    Review Notes First
                  </button>
                  {data.lastScore !== null && (
                    <p className="text-[11px] text-gray-400">
                      Last score: <span className="text-teal-600 font-bold">{data.lastScore}%</span>{' '}
                      <span className="text-gray-400">(Try to beat it!)</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Progress note */}
          <p className="mt-5 text-[11px] text-gray-400 flex items-center gap-1.5">
            <Icon icon="mdi:information-outline" width={13} />
            Progress is saved automatically on your device.
          </p>
        </main>
      </div>
    </div>
  );
};

export default PracticeIntro;