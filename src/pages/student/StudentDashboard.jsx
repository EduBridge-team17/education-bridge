import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut } from 'lucide-react';
import { Icon } from '@iconify/react';

const classes = [
  {
    id: 'ss1',
    level: 'SS 1',
    description: 'Foundation Year. Start your senior secondary journey here.',
    cta: 'Browse Subjects →',
    icon: 'mdi:book-open-page-variant-outline',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    ctaColor: 'text-amber-500',
    borderActive: 'border-amber-400',
  },
  {
    id: 'ss2',
    level: 'SS 2',
    description: 'Deepen your knowledge. Focus on core sciences and arts.',
    cta: 'Select Class →',
    icon: 'mynaui:flask-conical-solid',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    ctaColor: 'text-teal-600',
    borderActive: 'border-teal-500',
  },
  {
    id: 'ss3',
    level: 'SS 3',
    description: 'Final Year. Prepare for WAEC, NECO and JAMB exams.',
    cta: 'Exam Prep →',
    icon: 'fluent:hat-graduation-12-filled',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-50',
    ctaColor: 'text-sky-600',
    borderActive: 'border-sky-400',
  },
];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('ss2');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-teal-50 p-1.5 rounded-full">
            <GraduationCap size={18} className="text-teal-700" />
          </div>
          <span className="text-sm font-bold text-teal-800 tracking-tight">Education Bridge</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 transition-colors font-medium"
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-6 py-16 bg-white">

        {/* Page heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
          Select Your Class
        </h1>

        {/* Pill badge */}
        <div className="flex items-center justify-center gap-1.5 font-semibold px-3 py-1.5 mb-8">
          <Icon icon="ic:baseline-library-books" className="text-teal-700" width={20} height={20} />
          <h3 className="text-xl">Welcome, Student!</h3>
        </div>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
          {classes.map((cls) => {
            const isSelected = selected === cls.id;
            return (
              <button
                key={cls.id}
                onClick={() => {
                  setSelected(cls.id);
                  navigate('/student-courses-dashboard');
                }}
                className={`
                  flex-1 text-left p-5 rounded-2xl border-2 bg-white transition-all duration-200 cursor-pointer
                  ${isSelected
                    ? `${cls.borderActive} shadow-md scale-[1.02]`
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                  }
                `}
              >
                {/* Icon */}
                <div className={`w-9 h-9 rounded-xl ${cls.iconBg} flex items-center justify-center mb-4`}>
                  <Icon icon={cls.icon} className={cls.iconColor} width={22} height={22} />
                </div>

                {/* Level */}
                <p className="text-base font-bold text-gray-900 mb-1">{cls.level}</p>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{cls.description}</p>

                {/* CTA */}
                <span className={`text-xs font-semibold ${cls.ctaColor}`}>
                  {cls.cta}
                </span>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;