import React from 'react';
import { Icon } from '@iconify/react';

const StudentTopNav = ({ studentName = 'Chidi O.', role = 'Student' }) => {
  return (
    <header className="h-[70px] w-full bg-white border-b border-gray-100 px-6 flex items-center justify-between shrink-0">

      {/* Search */}
      <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 w-[280px]">
        <Icon icon="mdi:magnify" width={16} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-[13px] text-gray-600 placeholder-gray-400 outline-none w-full"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
          <Icon icon="mdi:bell-outline" width={18} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Language */}
        <button className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium hover:text-gray-700 transition-colors">
          <Icon icon="mdi:earth" width={16} className="text-gray-400" />
          English
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200" />

        {/* Profile */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
            {studentName.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="leading-tight">
            <p className="text-[12px] font-semibold text-gray-800">{studentName}</p>
            <p className="text-[10px] text-gray-400">{role}</p>
          </div>
          <Icon icon="mdi:chevron-down" width={16} className="text-gray-400" />
        </div>

      </div>
    </header>
  );
};

export default StudentTopNav;