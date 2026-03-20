import React from 'react';
import {
  CloudUpload,
  PlusSquare,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
} from 'lucide-react';
import Button from './Button';

const SideBar = ({ activeTab, onLogout }) => {
  const menuItems = [
    {
      id: 'upload',
      label: 'Upload Resources',
      icon: <CloudUpload size={20} />,
    },
    { id: 'quiz', label: 'Create Quiz', icon: <PlusSquare size={20} /> },
    {
      id: 'performance',
      label: 'Performance summary',
      icon: <BarChart3 size={20} />,
    },
  ];

  return (
    <aside className='w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0'>
      <div className='p-6 mb-4'>
        <div className='flex items-center gap-2'>
          <div className='bg-[#0D685E] p-2 rounded-lg'>
            <GraduationCap className='text-white' size={20} />
          </div>
          <h1 className='font-bold text-[#0D685E] text-sm tracking-tight'>
            Education Bridge
          </h1>
        </div>
      </div>

      <nav className='flex-1 px-4 space-y-1'>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold cursor-pointer transition-all ${
              activeTab === item.id
                ? 'bg-[#E9F3F2] text-[#0D685E] border-r-4 border-[#0D685E]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon} {item.label}
          </div>
        ))}

        <div className='mt-10 px-4'>
          <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4'>
            System
          </p>
          <div className='flex items-center gap-3 py-2 text-gray-600 hover:text-[#0D685E] text-[13px] font-medium cursor-pointer transition-colors'>
            <Settings size={20} /> Settings
          </div>
        </div>
      </nav>

      <div className='p-6 border-t border-gray-100'>
        <Button
          variant='danger'
          className='w-full flex items-center justify-start gap-3 !bg-transparent !text-[#F43F5E] !shadow-none font-medium text-[13px]'
          onClick={onLogout}
        >
          <LogOut size={20} /> Sign Out
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;
