import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';

// ─── Subject data ────────────────────────────────────────────────────────────
const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Algebra, Geometry, and Calculus fundamentals for senior secondary.',
    type: 'CORE',
    icon: 'ph:math-operations-bold',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    status: 'progress',
    progress: 45,
  },
  {
    id: 'english',
    name: 'English Language',
    description: 'Comprehension, essay writing, and oral English skills.',
    type: 'CORE',
    icon: 'fluent:book-open-28-filled',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    status: 'progress',
    progress: 30,
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Study of living organisms, cells, and ecosystems.',
    type: 'CORE',
    icon: 'mdi:leaf',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    status: 'start',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Exploring matter, atomic structure, and chemical reactions.',
    type: 'CORE',
    icon: 'mynaui:flask-conical-solid',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    status: 'offline',
    progress: 60,
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, optics, electricity, and the laws of motion.',
    type: 'CORE',
    icon: 'fluent:lightning-28-filled',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    status: 'progress',
    progress: 20,
  },
  {
    id: 'economics',
    name: 'Economics',
    description: 'Supply and demand, market structures, and national income.',
    type: 'ELECTIVE',
    icon: 'mdi:chart-line',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-50',
    status: 'start',
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Physical features of the earth, map reading, and regional geography.',
    type: 'ELECTIVE',
    icon: 'mdi:earth',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-50',
    status: 'offline',
    progress: 80,
  },
  {
    id: 'agric',
    name: 'Agric Science',
    description: 'Crop production, animal husbandry, and agricultural practices.',
    type: 'ELECTIVE',
    icon: 'mdi:sprout-outline',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    status: 'start',
  },
  {
    id: 'civic',
    name: 'Civic Education',
    description: 'Rights, responsibilities, government structures, and citizenship.',
    type: 'ELECTIVE',
    icon: 'mdi:account-group-outline',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-50',
    status: 'start',
  },
];

// ─── Badge colours ────────────────────────────────────────────────────────────
const typeBadge = {
  CORE:     'bg-teal-50 text-teal-600',
  ELECTIVE: 'bg-amber-50 text-amber-500',
};

// ─── Single subject card ──────────────────────────────────────────────────────
const SubjectCard = ({ subject, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
  >

    {/* Icon + badge */}
    <div className="flex items-start justify-between">
      <div className={`w-10 h-10 rounded-xl ${subject.iconBg} flex items-center justify-center`}>
        <Icon icon={subject.icon} width={22} height={22} className={subject.iconColor} />
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${typeBadge[subject.type]}`}>
        {subject.type}
      </span>
    </div>

    {/* Name + description */}
    <div className="flex-1">
      <p className="text-[13px] font-bold text-gray-900 mb-0.5">{subject.name}</p>
      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{subject.description}</p>
    </div>

    {/* Status footer */}
    <div className="mt-auto pt-1 border-t border-gray-50">
      {subject.status === 'progress' && (
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-gray-400 font-medium">Progress</span>
            <span className="text-[11px] text-teal-600 font-semibold">{subject.progress}%</span>
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full"
              style={{ width: `${subject.progress}%` }}
            />
          </div>
        </div>
      )}

      {subject.status === 'offline' && (
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11px] text-gray-500 font-medium">Offline Ready</span>
            <Icon icon="mdi:check-circle" width={13} className="text-teal-500" />
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full"
              style={{ width: `${subject.progress ?? 100}%` }}
            />
          </div>
        </div>
      )}

      {subject.status === 'start' && (
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-gray-400 font-medium">Start Learning</span>
          <Icon icon="mdi:arrow-right" width={14} className="text-gray-400" />
        </div>
      )}
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const StudentCoursesDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const user = (() => {
    try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; }
  })();

  const initials = user.fullName
    ? user.fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'CO';

  const filtered = subjects.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">

      {/* ── Sidebar ── */}
      <StudentSideNav />

      {/* ── Main column ── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* ── Top bar ── */}
        <header className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-end gap-3 shrink-0">
          {/* Online Mode pill */}
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-600 text-[11px] font-semibold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
            Online Mode
          </div>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
            {initials}
          </div>

          {/* Name / role */}
          <div className="leading-tight">
            <p className="text-[12px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
            <p className="text-[10px] text-gray-400 capitalize">{user.role || 'Student'}</p>
          </div>

          <Icon icon="mdi:chevron-down" width={16} className="text-gray-400 cursor-pointer" />
        </header>

        {/* ── Scrollable content ── */}
        <main className="flex-1 overflow-y-auto px-8 py-8">

          {/* Heading */}
          <h1 className="text-[22px] font-bold text-gray-900 mb-1 tracking-tight">
            What do you want to learn?
          </h1>
          <p className="text-[13px] text-gray-400 mb-7">
            Select a subject to start your lesson or continue where you left off.
          </p>

          {/* Search */}
          <div className="relative max-w-xs mb-8">
            <Icon
              icon="mdi:magnify"
              width={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Find a subject (e.g., Mathematics)..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-300 transition"
            />
          </div>

          {/* Subject grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(subject => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={() => navigate(`/student-subject/${subject.id}`)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-12">No subjects match "{search}"</p>
          )}

          {/* Request subject row */}
          <button className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 border border-dashed border-gray-200 rounded-2xl text-[12px] text-gray-400 hover:border-teal-300 hover:text-teal-500 transition-colors font-medium">
            <Icon icon="mdi:plus" width={15} />
            Can't find a subject? Request it here
          </button>
        </main>

        {/* ── Footer ── */}
        <footer className="bg-white border-t border-gray-100 px-8 py-4 text-center shrink-0">
          <p className="text-[11px] text-gray-400">
            Education Bridge © 2023. Empowering Rural Education.
          </p>
          <div className="flex items-center justify-center gap-3 mt-1">
            {['Terms', 'Privacy', 'Help Center'].map(link => (
              <a key={link} href="#" className="text-[11px] text-gray-400 hover:text-teal-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StudentCoursesDashboard;