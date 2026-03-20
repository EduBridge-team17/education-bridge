import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import SideBar from '../../component/SideBar';

const DashboardLayout = ({ children, activeTab, toggleMobileMenu }) => {
  const userStr = localStorage.getItem('user');
  const teacher = userStr ? JSON.parse(userStr) : null;
  const getInitials = (name) => {
    if (!name) return 'T';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className='flex h-screen bg-[#F9FAFB] font-sans overflow-hidden'>
      <SideBar activeTab={activeTab} />

      <div className='flex-1 flex flex-col min-w-0 overflow-hidden'>
        <header className='h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-10 sticky top-0 z-40 shrink-0'>
          <div className='flex items-center gap-4 flex-1'>
            <button
              className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
              onClick={toggleMobileMenu}
            >
              <Menu size={20} className='text-gray-600' />
            </button>

            <div className='relative hidden md:block w-full max-w-[400px]'>
              <Search
                className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                size={18}
              />
              <input
                type='text'
                placeholder='Search resources, lessons, or students...'
                className='w-full border border-gray-100 bg-gray-50/50 rounded-full py-2.5 pl-12 pr-4 text-sm focus:bg-white focus:border-[#0D685E] focus:ring-4 focus:ring-[#0D685E]/5 outline-none transition-all'
              />
            </div>
          </div>

          <div className='flex items-center gap-4 lg:gap-8'>
            <div className='relative cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors'>
              <Bell size={22} className='text-gray-600' />
              <span className='absolute top-1 right-1.5 bg-[#F43F5E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm'>
                6
              </span>
            </div>

            <div className='hidden sm:flex items-center gap-2 border-l border-gray-200 pl-4 lg:pl-8 cursor-pointer group'>
              <img
                src='https://flagcdn.com/w20/gb.png'
                alt='UK'
                className='w-5 h-3.5 object-cover rounded-sm shadow-sm'
              />
              <span className='text-sm font-medium text-gray-700 group-hover:text-[#0D685E]'>
                English
              </span>
              <ChevronDown
                size={14}
                className='text-gray-400 group-hover:text-[#0D685E] transition-colors'
              />
            </div>

            <div className='flex items-center gap-3 pl-4 border-l border-gray-100 lg:border-none lg:pl-0 cursor-pointer group'>
              <div className='w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm ring-2 ring-transparent group-hover:ring-[#F97316]/20 transition-all'>
                {getInitials(teacher?.name)}
              </div>
              <div className='hidden lg:block text-left'>
                <p className='text-[13px] font-bold text-gray-800 leading-none group-hover:text-[#0D685E]'>
                  {teacher?.name?.split(' ').slice(0, 2).join(' ') || 'Teacher'}
                </p>
                <p className='text-[10px] text-gray-500 mt-1 font-medium capitalize'>
                  {teacher?.role || 'Teacher'}
                </p>
              </div>
              <ChevronDown
                size={14}
                className='text-gray-400 group-hover:text-[#0D685E] transition-colors'
              />
            </div>
          </div>
        </header>

        <main className='flex-1 overflow-y-auto p-4 lg:p-12 scroll-smooth'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
