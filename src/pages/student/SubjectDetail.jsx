import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';


const subjectData = {
  math: {
    name: 'Mathematics',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Master algebra, geometry, and statistics with offline-ready lessons designed for success.',
    topicsDone: 14,
    avgScore: 85,
    totalTopics: 8,
    totalLessons: 42,
    heroIcon: 'ph:math-operations-bold',
  
    heroBg: 'from-teal-700 via-teal-600 to-emerald-500',
    topics: [
      { id: 'algebra',     name: 'Algebraic Processes', lessons: 4, quizzes: 2, progress: 75, icon: 'ph:math-operations-bold',  iconColor: 'text-teal-600',   iconBg: 'bg-teal-50',   done: true  },
      { id: 'geometry',    name: 'Geometry & Shapes',   lessons: 6, quizzes: 3, progress: 30, icon: 'mdi:triangle-outline',      iconColor: 'text-orange-500', iconBg: 'bg-orange-50', done: false },
      { id: 'statistics',  name: 'Statistics',          lessons: 3, quizzes: 1, progress: 0,  icon: 'mdi:chart-bar',             iconColor: 'text-blue-500',   iconBg: 'bg-blue-50',   done: false },
      { id: 'probability', name: 'Probability',         lessons: 5, quizzes: 2, progress: 0,  icon: 'mdi:dice-multiple-outline', iconColor: 'text-purple-500', iconBg: 'bg-purple-50', done: false },
    ],
    otherSubjects: [
      { id: 'physics',   name: 'Physics',   sub: 'Motion, Energy…',  icon: 'fluent:lightning-28-filled', iconColor: 'text-blue-500',   iconBg: 'bg-blue-50'   },
      { id: 'chemistry', name: 'Chemistry', sub: 'Periodic Table…',  icon: 'mynaui:flask-conical-solid', iconColor: 'text-purple-500', iconBg: 'bg-purple-50' },
      { id: 'english',   name: 'English',   sub: 'Essay Writing…',   icon: 'fluent:book-open-28-filled', iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
    ],
  },
  english: {
    name: 'English Language',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Build comprehension, essay writing, and oral communication skills for examinations.',
    topicsDone: 6,
    avgScore: 72,
    totalTopics: 6,
    totalLessons: 30,
    heroIcon: 'fluent:book-open-28-filled',
    heroBg: 'from-orange-600 via-orange-500 to-amber-400',
    topics: [
      { id: 'comprehension', name: 'Comprehension',    lessons: 5, quizzes: 2, progress: 80, icon: 'fluent:book-open-28-filled', iconColor: 'text-orange-500', iconBg: 'bg-orange-50', done: true  },
      { id: 'essay',         name: 'Essay Writing',    lessons: 6, quizzes: 2, progress: 40, icon: 'mdi:pencil-outline',         iconColor: 'text-amber-500',  iconBg: 'bg-amber-50',  done: false },
      { id: 'oral',          name: 'Oral English',     lessons: 4, quizzes: 1, progress: 0,  icon: 'mdi:microphone-outline',     iconColor: 'text-red-400',    iconBg: 'bg-red-50',    done: false },
      { id: 'summary',       name: 'Summary Writing',  lessons: 3, quizzes: 1, progress: 0,  icon: 'mdi:text-box-outline',       iconColor: 'text-gray-500',   iconBg: 'bg-gray-50',   done: false },
    ],
    otherSubjects: [
      { id: 'math',      name: 'Mathematics', sub: 'Algebra, Geometry…', icon: 'ph:math-operations-bold',    iconColor: 'text-teal-600',   iconBg: 'bg-teal-50'   },
      { id: 'biology',   name: 'Biology',     sub: 'Cells, Organisms…',  icon: 'mdi:leaf',                   iconColor: 'text-green-600',  iconBg: 'bg-green-50'  },
      { id: 'chemistry', name: 'Chemistry',   sub: 'Periodic Table…',    icon: 'mynaui:flask-conical-solid', iconColor: 'text-purple-500', iconBg: 'bg-purple-50' },
    ],
  },
  biology: {
    name: 'Biology',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Explore living organisms, ecosystems, genetics, and the science of life.',
    topicsDone: 3,
    avgScore: 68,
    totalTopics: 5,
    totalLessons: 25,
    heroIcon: 'mdi:leaf',
    heroBg: 'from-green-700 via-green-600 to-emerald-400',
    topics: [
      { id: 'cells',    name: 'Cell Biology',   lessons: 5, quizzes: 2, progress: 90, icon: 'mdi:circle-outline',       iconColor: 'text-green-600', iconBg: 'bg-green-50',  done: true  },
      { id: 'genetics', name: 'Genetics',       lessons: 6, quizzes: 2, progress: 20, icon: 'mdi:dna',                  iconColor: 'text-teal-600',  iconBg: 'bg-teal-50',   done: false },
      { id: 'ecology',  name: 'Ecology',        lessons: 4, quizzes: 1, progress: 0,  icon: 'mdi:tree-outline',         iconColor: 'text-green-500', iconBg: 'bg-green-50',  done: false },
      { id: 'evolution','name': 'Evolution',    lessons: 5, quizzes: 2, progress: 0,  icon: 'mdi:arrow-up-circle-outline', iconColor: 'text-lime-500', iconBg: 'bg-lime-50', done: false },
    ],
    otherSubjects: [
      { id: 'chemistry', name: 'Chemistry', sub: 'Periodic Table…',  icon: 'mynaui:flask-conical-solid', iconColor: 'text-purple-500', iconBg: 'bg-purple-50' },
      { id: 'physics',   name: 'Physics',   sub: 'Motion, Energy…',  icon: 'fluent:lightning-28-filled', iconColor: 'text-blue-500',   iconBg: 'bg-blue-50'   },
      { id: 'math',      name: 'Mathematics',sub:'Algebra…',         icon: 'ph:math-operations-bold',    iconColor: 'text-teal-600',   iconBg: 'bg-teal-50'   },
    ],
  },
  chemistry: {
    name: 'Chemistry',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Explore matter, atomic structure, chemical reactions, and the periodic table.',
    topicsDone: 8,
    avgScore: 77,
    totalTopics: 6,
    totalLessons: 32,
    heroIcon: 'mynaui:flask-conical-solid',
    heroBg: 'from-purple-700 via-purple-600 to-violet-400',
    topics: [
      { id: 'atomic',    name: 'Atomic Structure',  lessons: 5, quizzes: 2, progress: 100, icon: 'mdi:atom',                   iconColor: 'text-purple-600', iconBg: 'bg-purple-50', done: true  },
      { id: 'periodic',  name: 'Periodic Table',    lessons: 6, quizzes: 2, progress: 60,  icon: 'mdi:table',                  iconColor: 'text-violet-500', iconBg: 'bg-violet-50', done: false },
      { id: 'bonding',   name: 'Chemical Bonding',  lessons: 5, quizzes: 2, progress: 0,   icon: 'mdi:link-variant',           iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50', done: false },
      { id: 'reactions', name: 'Chemical Reactions',lessons: 6, quizzes: 3, progress: 0,   icon: 'mynaui:flask-conical-solid', iconColor: 'text-purple-500', iconBg: 'bg-purple-50', done: false },
    ],
    otherSubjects: [
      { id: 'physics', name: 'Physics',   sub: 'Motion, Energy…', icon: 'fluent:lightning-28-filled', iconColor: 'text-blue-500',  iconBg: 'bg-blue-50'  },
      { id: 'biology', name: 'Biology',   sub: 'Cells, Organisms…',icon: 'mdi:leaf',                  iconColor: 'text-green-600', iconBg: 'bg-green-50' },
      { id: 'math',    name: 'Mathematics',sub: 'Algebra…',        icon: 'ph:math-operations-bold',   iconColor: 'text-teal-600',  iconBg: 'bg-teal-50'  },
    ],
  },
  physics: {
    name: 'Physics',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Understand mechanics, optics, electricity, and the fundamental laws of motion.',
    topicsDone: 4,
    avgScore: 65,
    totalTopics: 6,
    totalLessons: 28,
    heroIcon: 'fluent:lightning-28-filled',
    heroBg: 'from-blue-700 via-blue-600 to-sky-400',
    topics: [
      { id: 'mechanics',    name: 'Mechanics',         lessons: 6, quizzes: 2, progress: 50, icon: 'mdi:cog-outline',            iconColor: 'text-blue-600',  iconBg: 'bg-blue-50',  done: false },
      { id: 'waves',        name: 'Waves & Optics',    lessons: 5, quizzes: 2, progress: 20, icon: 'mdi:sine-wave',              iconColor: 'text-sky-500',   iconBg: 'bg-sky-50',   done: false },
      { id: 'electricity',  name: 'Electricity',       lessons: 6, quizzes: 3, progress: 0,  icon: 'fluent:lightning-28-filled', iconColor: 'text-yellow-500',iconBg: 'bg-yellow-50',done: false },
      { id: 'magnetism',    name: 'Magnetism',         lessons: 4, quizzes: 1, progress: 0,  icon: 'mdi:magnet-on',             iconColor: 'text-red-500',   iconBg: 'bg-red-50',   done: false },
    ],
    otherSubjects: [
      { id: 'math',      name: 'Mathematics', sub: 'Algebra…',       icon: 'ph:math-operations-bold',    iconColor: 'text-teal-600',   iconBg: 'bg-teal-50'   },
      { id: 'chemistry', name: 'Chemistry',   sub: 'Periodic Table…',icon: 'mynaui:flask-conical-solid', iconColor: 'text-purple-500', iconBg: 'bg-purple-50' },
      { id: 'biology',   name: 'Biology',     sub: 'Cells…',         icon: 'mdi:leaf',                   iconColor: 'text-green-600',  iconBg: 'bg-green-50'  },
    ],
  },
  economics: {
    name: 'Economics',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Learn supply and demand, market structures, national income, and economic policy.',
    topicsDone: 2,
    avgScore: 70,
    totalTopics: 5,
    totalLessons: 22,
    heroIcon: 'mdi:chart-line',
    heroBg: 'from-teal-700 via-cyan-600 to-teal-400',
    topics: [
      { id: 'demand',    name: 'Demand & Supply',   lessons: 4, quizzes: 2, progress: 60, icon: 'mdi:chart-line',       iconColor: 'text-teal-600', iconBg: 'bg-teal-50',  done: false },
      { id: 'market',    name: 'Market Structures', lessons: 5, quizzes: 2, progress: 0,  icon: 'mdi:store-outline',    iconColor: 'text-cyan-500', iconBg: 'bg-cyan-50',  done: false },
      { id: 'national',  name: 'National Income',   lessons: 4, quizzes: 1, progress: 0,  icon: 'mdi:bank-outline',     iconColor: 'text-blue-500', iconBg: 'bg-blue-50',  done: false },
    ],
    otherSubjects: [
      { id: 'math',    name: 'Mathematics', sub: 'Algebra…',      icon: 'ph:math-operations-bold', iconColor: 'text-teal-600',  iconBg: 'bg-teal-50'  },
      { id: 'english', name: 'English',     sub: 'Essay Writing…',icon: 'fluent:book-open-28-filled',iconColor: 'text-orange-500',iconBg:'bg-orange-50'},
      { id: 'geography',name:'Geography',   sub: 'Maps, Regions…',icon: 'mdi:earth',               iconColor: 'text-orange-400',iconBg: 'bg-orange-50'},
    ],
  },
  geography: {
    name: 'Geography',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Physical features of the earth, map reading, regional geography, and the environment.',
    topicsDone: 5,
    avgScore: 74,
    totalTopics: 5,
    totalLessons: 20,
    heroIcon: 'mdi:earth',
    heroBg: 'from-orange-600 via-orange-500 to-yellow-400',
    topics: [
      { id: 'physical',  name: 'Physical Geography', lessons: 5, quizzes: 2, progress: 80, icon: 'mdi:mountain',     iconColor: 'text-orange-500', iconBg: 'bg-orange-50', done: false },
      { id: 'maps',      name: 'Map Reading',         lessons: 4, quizzes: 2, progress: 40, icon: 'mdi:map-outline',  iconColor: 'text-amber-500',  iconBg: 'bg-amber-50',  done: false },
      { id: 'regional',  name: 'Regional Geography',  lessons: 5, quizzes: 2, progress: 0,  icon: 'mdi:earth',        iconColor: 'text-yellow-600', iconBg: 'bg-yellow-50', done: false },
    ],
    otherSubjects: [
      { id: 'economics', name: 'Economics',   sub: 'Supply & Demand…',icon: 'mdi:chart-line',       iconColor: 'text-teal-500',   iconBg: 'bg-teal-50'   },
      { id: 'biology',   name: 'Biology',     sub: 'Ecology…',        icon: 'mdi:leaf',             iconColor: 'text-green-600',  iconBg: 'bg-green-50'  },
      { id: 'math',      name: 'Mathematics', sub: 'Algebra…',        icon: 'ph:math-operations-bold',iconColor:'text-teal-600',  iconBg: 'bg-teal-50'   },
    ],
  },
  agric: {
    name: 'Agric Science',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Crop production, animal husbandry, agricultural practices, and rural economics.',
    topicsDone: 1,
    avgScore: 60,
    totalTopics: 4,
    totalLessons: 18,
    heroIcon: 'mdi:sprout-outline',
    heroBg: 'from-green-700 via-lime-600 to-green-400',
    topics: [
      { id: 'crops',    name: 'Crop Production',    lessons: 5, quizzes: 2, progress: 30, icon: 'mdi:sprout-outline',    iconColor: 'text-green-600', iconBg: 'bg-green-50', done: false },
      { id: 'livestock',name: 'Animal Husbandry',   lessons: 5, quizzes: 2, progress: 0,  icon: 'mdi:cow',               iconColor: 'text-lime-600',  iconBg: 'bg-lime-50',  done: false },
      { id: 'soil',     name: 'Soil Science',        lessons: 4, quizzes: 1, progress: 0,  icon: 'mdi:terrain',           iconColor: 'text-amber-600', iconBg: 'bg-amber-50', done: false },
    ],
    otherSubjects: [
      { id: 'biology',   name: 'Biology',   sub: 'Ecology…',       icon: 'mdi:leaf',             iconColor: 'text-green-600', iconBg: 'bg-green-50' },
      { id: 'chemistry', name: 'Chemistry', sub: 'Periodic Table…',icon: 'mynaui:flask-conical-solid',iconColor:'text-purple-500',iconBg:'bg-purple-50'},
      { id: 'economics', name: 'Economics', sub: 'Rural Income…',  icon: 'mdi:chart-line',       iconColor: 'text-teal-500',  iconBg: 'bg-teal-50'  },
    ],
  },
  civic: {
    name: 'Civic Education',
    curriculum: 'SS2 Curriculum',
    term: 'Term 1',
    description: 'Rights, responsibilities, government structures, democracy, and active citizenship.',
    topicsDone: 0,
    avgScore: 0,
    totalTopics: 4,
    totalLessons: 16,
    heroIcon: 'mdi:account-group-outline',
    heroBg: 'from-sky-700 via-sky-600 to-blue-400',
    topics: [
      { id: 'rights',    name: 'Rights & Responsibilities', lessons: 4, quizzes: 1, progress: 0, icon: 'mdi:account-check-outline', iconColor: 'text-sky-600',  iconBg: 'bg-sky-50',  done: false },
      { id: 'government',name: 'Government Structures',     lessons: 5, quizzes: 2, progress: 0, icon: 'mdi:bank-outline',          iconColor: 'text-blue-600', iconBg: 'bg-blue-50', done: false },
      { id: 'democracy', name: 'Democracy & Elections',     lessons: 4, quizzes: 1, progress: 0, icon: 'mdi:vote-outline',          iconColor: 'text-indigo-500',iconBg:'bg-indigo-50',done: false },
    ],
    otherSubjects: [
      { id: 'english',   name: 'English',   sub: 'Essay Writing…',icon: 'fluent:book-open-28-filled', iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
      { id: 'economics', name: 'Economics', sub: 'Supply & Demand…',icon:'mdi:chart-line',             iconColor: 'text-teal-500',   iconBg: 'bg-teal-50'   },
      { id: 'geography', name: 'Geography', sub: 'Maps, Regions…',icon: 'mdi:earth',                  iconColor: 'text-orange-400', iconBg: 'bg-orange-50' },
    ],
  },
};

// ── Progress ring — rendered as inline SVG with no Tailwind rotate hack ────────
const ProgressRing = ({ pct }) => {
  const r    = 16;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" className="shrink-0">
      <circle cx="22" cy="22" r={r} fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
      <circle cx="22" cy="22" r={r} fill="none" stroke="#14b8a6" strokeWidth="3.5"
        strokeDasharray={`${dash} ${circ}`} strokeDashoffset={circ * 0.25}
        strokeLinecap="round" transform="rotate(-90 22 22)" />
      <text x="22" y="26" textAnchor="middle" fill="#0f766e" fontSize="9" fontWeight="700">
        {pct}%
      </text>
    </svg>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const SubjectDetail = () => {
  const navigate             = useNavigate();
  const { subjectId = 'math' } = useParams();

  // Safe fallback: always resolves to a valid object
  const subject = subjectData[subjectId] ?? subjectData.math;

  const user     = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const initials = user.name
    ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'CO';

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* ── Top bar ── */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search"
              className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-200"
            />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              <Icon icon="mdi:bell-outline" width={18} className="text-gray-400" />
            </button>
            <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              <Icon icon="mdi:web" width={18} className="text-gray-400" />
            </button>
            <span className="text-[12px] text-gray-600 font-medium">English</span>
            <Icon icon="mdi:chevron-up" width={16} className="text-gray-400" />
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              {initials}
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
            <Icon icon="mdi:chevron-down" width={15} className="text-gray-400" />
          </div>
        </header>

        {/* ── Breadcrumb ── */}
        <div className="px-6 py-2.5 flex items-center gap-1.5 text-[11px] text-gray-400 bg-white border-b border-gray-50">
          <button onClick={() => navigate('/student-courses-dashboard')} className="hover:text-teal-600 transition-colors">Home</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <button onClick={() => navigate('/student-courses-dashboard')} className="hover:text-teal-600 transition-colors">Subjects</button>
          <Icon icon="mdi:chevron-right" width={12} />
          <span className="text-gray-700 font-semibold">{subject.name}</span>
        </div>

        <main className="flex-1 overflow-y-auto px-6 py-5 pb-10">
          <div className="flex gap-5 w-4/5">

            <div className="flex-1 min-w-0">

              <div className={`bg-gradient-to-br ${subject.heroBg} rounded-2xl p-6 mb-5 relative overflow-hidden`}>
                <div className="absolute right-32 top-4  w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute right-16 top-10 w-16 h-16 rounded-full bg-white/10" />
                <div className="absolute -right-4 -bottom-4 w-40 h-40 rounded-full bg-white/10" />

                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div className="max-w-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[18px] font-bold text-white/70 uppercase tracking-wider">
                        {subject.curriculum}
                      </span>
                      <div className="flex items-center gap-1 bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">
                        <Icon icon="mdi:calendar-outline" width={10} />
                        {subject.term}
                      </div>
                    </div>
                    <h1 className="text-3xl font-extrabold text-white mb-2">{subject.name}</h1>
                    <p className="text-[18px] text-white/80 leading-relaxed mb-5">
                      {subject.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white text-[12px] font-semibold px-4 py-2 rounded-xl transition-colors">
                        <Icon icon="mdi:download-outline" width={15} />
                        Download All Materials (45MB)
                      </button>
                      <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-[12px] font-semibold px-4 py-2 rounded-xl transition-colors">
                        <Icon icon="mdi:check-circle-outline" width={15} />
                        Offline Ready
                      </button>
                    </div>
                  </div>

                  {/* Right: hero illustration */}
                  <div className="hidden sm:flex items-center justify-center">
                      <img
                        src="/Images/calculator-icon.png"
                        alt="Subject illustration"
                        className="w-40 h-40 object-cover rounded-full"
                      />
    
                  </div>
                </div>

                {/* Decorative subject icon */}
                <div className="absolute right-6 bottom-4 opacity-20 pointer-events-none">
                  <Icon icon={subject.heroIcon} width={80} className="text-white" />
                </div>
              </div>

              {/* Topic list */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                  <h2 className="text-[14px] font-bold text-gray-900">Topic List</h2>
                  <span className="text-[11px] text-gray-400">
                    {subject.totalTopics} Topics · {subject.totalLessons} Lessons
                  </span>
                </div>

                {subject.topics.map((topic, idx) => (
                  <button
                    key={topic.id}
                    onClick={() => navigate(`/student-topic/${subjectId}/${topic.id}`)}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors text-left
                      ${idx < subject.topics.length - 1 ? 'border-b border-gray-50' : ''}`}
                  >
                    <div className={`w-9 h-9 rounded-xl ${topic.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon icon={topic.icon} width={18} className={topic.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-gray-800">{topic.name}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Icon icon="mdi:book-outline" width={11} />{topic.lessons} Lessons
                        </span>
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Icon icon="mdi:clipboard-outline" width={11} />{topic.quizzes} Quizzes
                        </span>
                      </div>
                    </div>
                    {topic.progress > 0 && <ProgressRing pct={topic.progress} />}
                    {topic.done && (
                      <Icon icon="mdi:check-circle" width={20} className="text-teal-500 shrink-0" />
                    )}
                    <Icon icon="mdi:chevron-right" width={16} className="text-gray-300 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-56 shrink-0 space-y-4">

              {/* Student card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 mx-auto mb-2 flex items-center justify-center">
                  <Icon icon="mdi:account-circle" width={52} className="text-orange-300" />
                </div>
                <p className="text-[13px] font-bold text-gray-900">{user.fullName || 'Chidi Okafor'}</p>
                <p className="text-[10px] text-gray-400 mb-4">SS2 Student · Science Class</p>
                <div className="flex justify-around">
                  <div className="text-center">
                    <p className="text-[20px] font-extrabold text-gray-900">{subject.topicsDone}</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wide font-semibold mt-0.5">Topics Done</p>
                  </div>
                  <div className="w-px bg-gray-100" />
                  <div className="text-center">
                    <p className="text-[20px] font-extrabold text-teal-600">{subject.avgScore}%</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wide font-semibold mt-0.5">Avg Score</p>
                  </div>
                </div>
              </div>

              {/* Other subjects */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <p className="text-[12px] font-bold text-gray-900 px-4 py-3 border-b border-gray-50">Other Subjects</p>
                {subject.otherSubjects.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(`/student-subject/${s.id}`)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-left border-b border-gray-50 last:border-0"
                  >
                    <div className={`w-7 h-7 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon icon={s.icon} width={14} className={s.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold text-gray-800">{s.name}</p>
                      <p className="text-[10px] text-gray-400 truncate">{s.sub}</p>
                    </div>
                    <Icon icon="mdi:chevron-right" width={13} className="text-gray-300" />
                  </button>
                ))}
                <button
                  onClick={() => navigate('/student-courses-dashboard')}
                  className="w-full py-2.5 text-[11px] text-teal-600 font-semibold hover:bg-teal-50 transition-colors"
                >
                  View All Subjects
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubjectDetail;