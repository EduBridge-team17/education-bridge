import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const mainNav = [
  { label: 'Dashboard',        icon: 'material-symbols:grid-view-outline-rounded', path: '/student-courses-dashboard' },
  { label: 'Courses',          icon: 'hugeicons:course',                            path: '/student-courses'   },
  { label: 'Resource Library', icon: 'solar:library-linear',                        path: '/student-resources' },
  { label: 'Quiz',             icon: 'healthicons:i-exam-multiple-choice-outline',   path: '/student-quiz'      },
  { label: 'Send an Email',    icon: 'mdi:email-outline',                            path: '/student-email'     },
];

const systemNav = [
  { label: 'Offline Sync', icon: 'material-symbols:wifi-off-outline-rounded', path: '/student-offline'  },
  { label: 'Settings',     icon: 'solar:settings-linear',                     path: '/student-settings' },
];

const StudentSideNav = () => {
  const navigate       = useNavigate();
  const { pathname }   = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const NavLink = ({ item }) => {
    // treat any sub-path as active for that section
    const active = pathname === item.path || pathname.startsWith(item.path + '/');
    return (
      <button
        onClick={() => navigate(item.path)}
        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 text-left
          ${active
            ? 'bg-teal-50 text-teal-700 font-semibold'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium'
          }`}
      >
        <Icon
          icon={item.icon}
          width={16} height={16}
          className={active ? 'text-teal-600' : 'text-gray-400'}
        />
        {item.label}
      </button>
    );
  };

  return (
    <aside className="w-[210px] shrink-0 min-h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-5 px-3">

      {/* Logo */}
      <div>
        <div className="flex items-center gap-2.5 px-2 mb-7">
          <div className="w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="fluent:hat-graduation-12-filled" width={16} className="text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-bold text-teal-800 tracking-tight">EduBridge</p>
            <p className="text-[10px] text-gray-400 leading-none mt-0.5">Nigeria · Oversight</p>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex flex-col gap-0.5">
          {mainNav.map(item => <NavLink key={item.label} item={item} />)}
        </nav>

        {/* System section */}
        <div className="mt-6">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-3 mb-1.5">
            System
          </p>
          <div className="flex flex-col gap-0.5">
            {systemNav.map(item => <NavLink key={item.label} item={item} />)}
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors font-medium w-full"
      >
        <Icon icon="solar:logout-2-outline" width={16} />
        Sign Out
      </button>
    </aside>
  );
};

export default StudentSideNav;