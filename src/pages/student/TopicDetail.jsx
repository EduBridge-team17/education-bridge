import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';

// ── Mock data ──────────────────────────────────────────────────────────────────
const topicData = {
  algebra: {
    name: 'Algebraic Processes',
    subject: 'Mathematics',
    subjectId: 'math',
    badge: 'SS2 MATHEMATICS',
    description: 'Master variables, simplify complex expressions, and solve equations. Build the foundation for advanced problem-solving.',
    topics: 5,
    time: '1h 50m',
    completed: 20,
    color: 'from-teal-700 to-teal-500',
    lessons: [
      {
        id: 'intro-algebra',
        name: 'Introduction to Algebra',
        desc: 'Basic concepts of algebraic expressions and variables.',
        category: 'Algebra',
        duration: '15 min',
        status: 'completed',
      },
      {
        id: 'linear-equations',
        name: 'Linear Equations',
        desc: 'Solving simple linear equations and understanding equality.',
        category: 'Algebra',
        duration: '20 min',
        status: 'in-progress',
        progress: 68,
      },
      {
        id: 'quadratic-equations',
        name: 'Quadratic Equations',
        desc: 'Solving quadratic equations using different methods.',
        category: 'Equations',
        duration: '25 min',
        status: 'locked',
      },
      {
        id: 'simultaneous',
        name: 'Simultaneous Equations',
        desc: 'Solving two or more equations with multiple variables.',
        category: 'Systems',
        duration: '30 min',
        status: 'locked',
      },
      {
        id: 'graphing',
        name: 'Graphing Linear Functions',
        desc: 'Plotting and interpreting linear functions on a graph.',
        category: 'Graphing',
        duration: '20 min',
        status: 'locked',
      },
    ],
  },
};

const StatusIcon = ({ status }) => {
  if (status === 'completed')  return <Icon icon="mdi:check-circle" width={22} className="text-teal-500 shrink-0" />;
  if (status === 'in-progress') return <Icon icon="mdi:play-circle" width={22} className="text-orange-400 shrink-0" />;
  return <Icon icon="mdi:lock-outline" width={20} className="text-gray-300 shrink-0" />;
};

const TopicDetail = () => {
  const navigate = useNavigate();
  const { subjectId = 'math', topicId = 'algebra' } = useParams();
  const topic = topicData[topicId] || topicData.algebra;

  const user = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : 'CO';

  const r = 20, circ = 2 * Math.PI * r;
  const dash = (topic.completed / 100) * circ;

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-200" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:bell-outline" width={18} className="text-gray-400" /></button>
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:web" width={18} className="text-gray-400" /></button>
            <span className="text-[12px] text-gray-600 font-medium">English</span>
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold">{initials}</div>
            <div>
              <p className="text-[11px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
            <Icon icon="mdi:chevron-down" width={15} className="text-gray-400" />
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="px-6 py-2.5 flex items-center gap-1.5 text-[11px] text-gray-400">
          <button onClick={() => navigate('/student-courses-dashboard')} className="hover:text-teal-600">Home</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-subject/${subjectId}`)} className="hover:text-teal-600">Subjects</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate(`/student-subject/${subjectId}`)} className="hover:text-teal-600">{topic.subject}</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <span className="text-gray-700 font-semibold">{topic.name}</span>
        </div>

        <main className="flex-1 overflow-y-auto px-6 pb-8">
          <div className="max-w-2xl">

            {/* Hero */}
            <div className={`bg-gradient-to-br ${topic.color} rounded-2xl p-6 mb-5 relative overflow-hidden`}>
              <div className="absolute right-8 top-4 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute right-2 top-12 w-20 h-20 rounded-full bg-white/10" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold bg-white/20 text-white px-2.5 py-1 rounded-full mb-3 inline-block">{topic.badge}</span>
                <h1 className="text-2xl font-extrabold text-white mb-2">{topic.name}</h1>
                <p className="text-[12px] text-teal-100 leading-relaxed mb-4 max-w-sm">{topic.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-white/20 text-white text-[11px] px-3 py-1.5 rounded-full font-medium">
                    <Icon icon="mdi:layers-outline" width={13} /> {topic.topics} Topics
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 text-white text-[11px] px-3 py-1.5 rounded-full font-medium">
                    <Icon icon="mdi:clock-outline" width={13} /> {topic.time}
                  </div>
                </div>
              </div>
              {/* Progress circle */}
              <div className="absolute right-6 bottom-5 flex flex-col items-center">
                <svg width="56" height="56" className="-rotate-90">
                  <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
                  <circle cx="28" cy="28" r={r} fill="none" stroke="white" strokeWidth="4"
                    strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-white font-extrabold text-[14px]">{topic.completed}%</p>
                  <p className="text-white/70 text-[8px] font-medium uppercase tracking-wide">Done</p>
                </div>
              </div>
            </div>

            {/* Lesson list */}
            <div className="space-y-3">
              {topic.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => lesson.status !== 'locked' && navigate(`/student-lesson/${subjectId}/${topicId}/${lesson.id}`)}
                  className={`bg-white border rounded-2xl p-4 transition-all duration-200
                    ${lesson.status === 'locked' ? 'opacity-70 cursor-not-allowed border-gray-100' : 'cursor-pointer hover:shadow-md border-gray-100'}
                    ${lesson.status === 'in-progress' ? 'border-l-4 border-l-orange-400' : ''}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <StatusIcon status={lesson.status} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          {lesson.status === 'completed' && (
                            <span className="text-[9px] font-bold text-teal-600 uppercase tracking-wider">Completed</span>
                          )}
                          {lesson.status === 'in-progress' && (
                            <span className="text-[9px] font-bold text-orange-500 uppercase tracking-wider">In Progress</span>
                          )}
                          <p className={`text-[13px] font-bold mt-0.5 ${lesson.status === 'locked' ? 'text-gray-400' : 'text-gray-900'}`}>
                            {lesson.name}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{lesson.desc}</p>
                          {lesson.status === 'in-progress' && lesson.progress && (
                            <div className="mt-2">
                              <div className="w-40 h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 rounded-full" style={{ width: `${lesson.progress}%` }} />
                              </div>
                              <p className="text-[10px] text-orange-500 font-semibold mt-1">{lesson.progress}% Complete</p>
                            </div>
                          )}
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                              <Icon icon="mdi:layers-outline" width={10} /> {lesson.category}
                            </span>
                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                              <Icon icon="mdi:clock-outline" width={10} /> {lesson.duration}
                            </span>
                          </div>
                        </div>

                        {lesson.status === 'completed' && (
                          <button className="text-[11px] text-teal-600 font-semibold flex items-center gap-1 hover:text-teal-700 shrink-0">
                            Review <Icon icon="mdi:refresh" width={13} />
                          </button>
                        )}
                        {lesson.status === 'in-progress' && (
                          <button
                            onClick={e => { e.stopPropagation(); navigate(`/student-lesson/${subjectId}/${topicId}/${lesson.id}`); }}
                            className="bg-orange-500 hover:bg-orange-600 text-white text-[12px] font-bold px-4 py-1.5 rounded-xl transition-colors shrink-0"
                          >
                            Resume
                          </button>
                        )}
                        {lesson.status === 'locked' && (
                          <Icon icon="mdi:chevron-right" width={16} className="text-gray-200 shrink-0 mt-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TopicDetail;