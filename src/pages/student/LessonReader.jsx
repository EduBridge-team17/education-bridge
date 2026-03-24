import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';
import AIChatModal from './components/Aichatmodal';

const lessonContent = {
  'linear-equations': {
    title: 'Understanding Linear Equations',
    readTime: '15 min read',
    level: 'Beginner Level',
    subject: 'Mathematics',
    topic: 'Algebraic Processes',
    topicId: 'algebra',
    subjectId: 'math',
    lessonId: 'linear-equations',
    progress: 0,
    totalSections: 5,
    prevLesson: { id: 'intro-algebra', name: 'Introduction to Algebra' },
    nextLesson: { id: 'quadratic-equations', name: 'Graphing Methods' },
    sections: [
      {
        type: 'image',
        caption: 'Figure 1.1: A visual representation of slope-intercept form.',
      },
      {
        type: 'paragraph',
        text: 'Linear equations are the foundation of algebra. In this lesson, we will explore the relationship between variables that create a straight line when graphed. Understanding how to interpret the slope and y-intercept is crucial for solving real-world problems involving rates of change.',
      },
      {
        type: 'heading',
        text: 'The Slope-Intercept Form',
      },
      {
        type: 'paragraph',
        text: 'The most common way to write a linear equation is in the slope-intercept form. This formula allows you to easily identify the steepness of the line and where it crosses the vertical axis.',
      },
      {
        type: 'formula',
        text: 'y  =  mx  +  b',
      },
      {
        type: 'paragraph',
        text: 'In this equation, m represents the slope, or the rate of change, while b represents the y-intercept, the point where the line crosses the y-axis.',
      },
      {
        type: 'heading',
        text: 'Calculating Slope (m)',
      },
      {
        type: 'keypoints',
        title: 'Key Points',
        points: [
          'A linear equation forms a straight line when graphed.',
          'The standard slope-intercept form is y = mx + b.',
          'm is the slope (rise/run) and b is the y-intercept.',
        ],
      },
    ],
  },
};

const LessonReader = () => {
  const navigate = useNavigate();
  const { subjectId = 'math', topicId = 'algebra', lessonId = 'linear-equations' } = useParams();
  const lesson = lessonContent[lessonId] || lessonContent['linear-equations'];

  const [aiOpen,   setAiOpen]   = useState(false);
  const [marked,   setMarked]   = useState(false);

  const user = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : 'CO';

  const handleMarkComplete = () => {
    setMarked(true);
    setTimeout(() => navigate(`/student-lesson-complete/${subjectId}/${topicId}/${lessonId}`), 600);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-sm">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-200" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:bell-outline" width={18} className="text-gray-400" /></button>
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:web" width={18} className="text-gray-400" /></button>
            <span className="text-[12px] text-gray-600 font-medium">English</span>
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold">{initials}</div>
            <div>
              <p className="text-[11px] font-semibold text-gray-800">{user.name || 'Student'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
          </div>
        </header>
        
        <div className="px-6 py-2.5 flex items-center gap-1.5 text-[11px] text-gray-400">
          <button onClick={() => navigate('/student-courses-dashboard')} className="hover:text-teal-600">Home</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-subject/${subjectId}`)} className="hover:text-teal-600">Subjects</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-subject/${subjectId}`)} className="hover:text-teal-600">{lesson.subject}</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-topic/${subjectId}/${topicId}`)} className="hover:text-teal-600">{lesson.topic}</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <span className="text-gray-700 font-semibold">{lesson.title}</span>
        </div>

        <main className="flex-1 overflow-y-auto px-6 pb-8">
          <div className="flex gap-6 max-w-5xl">

            {/* ── Article body ── */}
            <div className="flex-1 min-w-0">
              <h1 className="text-[24px] font-extrabold text-gray-900 mb-2 tracking-tight">{lesson.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                  <Icon icon="mdi:clock-outline" width={13} /> {lesson.readTime}
                </span>
                <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                  <Icon icon="mdi:signal-cellular-2" width={13} /> {lesson.level}
                </span>
              </div>

              {/* Sections */}
              <div className="space-y-5">
                {lesson.sections.map((sec, i) => {
                  if (sec.type === 'image') return (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                      <div className="h-64 w-full flex items-center justify-center bg-white">
                        <img
                          src="/Images/graph.png"
                          alt="Lesson Graph"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[10px] text-gray-400 text-center py-2 italic">{sec.caption}</p>
                    </div>
                  );
                  if (sec.type === 'paragraph') return (
                    <p key={i} className="text-[13px] text-gray-600 leading-7">{sec.text}</p>
                  );
                  if (sec.type === 'heading') return (
                    <h2 key={i} className="text-[16px] font-bold text-gray-900 mt-2">{sec.text}</h2>
                  );
                  if (sec.type === 'formula') return (
                    <div key={i} className="bg-gray-50 border-l-4 border-teal-400 rounded-r-xl px-6 py-4 my-4">
                      <p className="text-[18px] font-mono font-bold text-gray-800 tracking-widest text-center">{sec.text}</p>
                    </div>
                  );
                  if (sec.type === 'keypoints') return (
                    <div key={i} className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                        <p className="text-[12px] font-bold text-orange-600">{sec.title}</p>
                      </div>
                      <ul className="space-y-2">
                        {sec.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-[12px] text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block mt-1.5 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                  return null;
                })}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100">
                <button
                  onClick={() => navigate(`/student-lesson/${subjectId}/${topicId}/${lesson.prevLesson.id}`)}
                  className="flex items-center gap-2 text-[12px] text-gray-500 hover:text-teal-600 font-medium transition-colors"
                >
                  <Icon icon="mdi:arrow-left" width={16} />
                  Previous: {lesson.prevLesson.name}
                </button>
                <button
                  onClick={() => navigate(`/student-lesson/${subjectId}/${topicId}/${lesson.nextLesson.id}`)}
                  className="flex items-center gap-2 text-[12px] text-gray-500 hover:text-teal-600 font-medium transition-colors"
                >
                  Next: {lesson.nextLesson.name}
                  <Icon icon="mdi:arrow-right" width={16} />
                </button>
              </div>
            </div>

            {/* ── Right sticky panel ── */}
            <div className="w-52 shrink-0 space-y-4">

              {/* Lesson Progress */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 sticky top-4">
                <p className="text-[12px] font-bold text-gray-900 mb-3">Lesson Progress</p>
                <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1.5">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: `${lesson.progress}%` }} />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>{lesson.progress}% Complete</span>
                  <span>2/{lesson.totalSections} Sections</span>
                </div>

                {/* Actions */}
                <div className="mt-4 space-y-2">
                  <p className="text-[11px] font-bold text-gray-700">Actions</p>
                  <button
                    onClick={handleMarkComplete}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-bold transition-all
                      ${marked ? 'bg-teal-100 text-teal-600' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}
                  >
                    <Icon icon={marked ? 'mdi:check-circle' : 'mdi:check-circle-outline'} width={15} />
                    {marked ? 'Marked!' : 'Mark Complete'}
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-[12px] text-gray-600 hover:bg-gray-50 font-medium border border-gray-100 transition-colors">
                    <Icon icon="mdi:download-outline" width={14} />
                    Download Lesson PDF
                  </button>
                </div>

                {/* AI Tutor */}
                <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-3 relative">
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-orange-400" />
                  <p className="text-[11px] font-bold text-gray-800 mb-1">Stuck on a concept?</p>
                  <p className="text-[10px] text-gray-400 mb-3">Our AI tutor is offline-capable and ready to help explain tricky parts.</p>
                  <button
                    onClick={() => setAiOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] text-teal-600 font-bold border border-teal-200 hover:bg-teal-50 transition-colors"
                  >
                    <Icon icon="mdi:robot-outline" width={14} />
                    Ask AI Tutor
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* AI Chat Modal */}
      <AIChatModal isOpen={aiOpen} onClose={() => setAiOpen(false)} lessonTitle={lesson.title} />
    </div>
  );
};

export default LessonReader;