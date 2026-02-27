import React, { useState } from 'react';
import { 
  CloudUpload, 
  PlusSquare, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search, 
  Bell,
  ChevronDown,
  BookText,
  FlaskConical,
  GraduationCap,
  Calculator,
  Book,
  Zap,
  Leaf,
  LineChart,
  Globe2,
  Users2,
  History,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('SS 2');
  const [selectedSubject, setSelectedSubject] = useState('Chemistry');

  const levels = [
    { id: 'SS 1', name: 'SS 1', sub: 'Senior Secondary 1', icon: <BookText className="text-[#3B82F6]" size={36} />, bg: 'bg-[#EFF6FF]' },
    { id: 'SS 2', name: 'SS 2', sub: 'Senior Secondary 2', icon: <FlaskConical className="text-[#22C55E]" size={36} />, bg: 'bg-[#F0FDF4]' },
    { id: 'SS 3', name: 'SS 3', sub: 'Senior Secondary 3', icon: <GraduationCap className="text-[#F59E0B]" size={36} />, bg: 'bg-[#FFFBEB]' },
  ];

  const subjects = [
    { name: 'Mathematics', icon: <Calculator size={20} className="text-blue-500" /> },
    { name: 'English', icon: <Book size={20} className="text-red-400" /> },
    { name: 'Physics', icon: <Zap size={20} className="text-purple-400" /> },
    { name: 'Chemistry', icon: <FlaskConical size={20} className="text-[#22C55E]" /> },
    { name: 'Biology', icon: <Leaf size={20} className="text-green-600" /> },
    { name: 'Economics', icon: <LineChart size={20} className="text-orange-400" /> },
    { name: 'Geography', icon: <Globe2 size={20} className="text-orange-600" /> },
    { name: 'Civics', icon: <Users2 size={20} className="text-indigo-600" /> },
    { name: 'Agric Sci.', icon: <Leaf size={20} className="text-lime-600" /> },
    { name: 'Literature', icon: <History size={20} className="text-pink-500" /> },
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#0D685E] p-2 rounded-lg">
              <GraduationCap className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-bold text-[#0D685E] text-sm tracking-tight">Education Bridge</h1>
              <p className="text-[10px] text-gray-500">Teacher Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <div className="flex items-center gap-3 px-4 py-3 bg-[#E9F3F2] text-[#0D685E] rounded-xl text-[13px] font-semibold border-r-4 border-[#0D685E] cursor-pointer">
            <CloudUpload size={20} /> Upload Resources
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-[13px] font-medium cursor-pointer transition-colors">
            <PlusSquare size={20} /> Create Quiz
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-[13px] font-medium cursor-pointer transition-colors">
            <BarChart3 size={20} /> Performance summary
          </div>

          <div className="mt-10 px-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">System</p>
            <div className="flex items-center gap-3 py-2 text-gray-600 hover:text-[#0D685E] text-[13px] font-medium cursor-pointer transition-colors">
              <Settings size={20} /> Settings
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <Button 
            variant="danger" 
            className="w-full flex items-center justify-start gap-3 !bg-transparent !text-[#F43F5E] hover:!bg-red-50 !px-2 !py-2 !shadow-none font-medium text-[13px]"
            onClick={() => navigate('/login')}
          >
            <LogOut size={20}/> Sign Out
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-10">
          <div className="relative w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full border border-gray-200 rounded-full py-2 pl-12 pr-4 text-sm focus:border-[#0D685E] outline-none transition-all"
            />
          </div>
          
          <div className="flex items-center gap-8">
            <div className="relative cursor-pointer">
              <Bell size={22} className="text-gray-600" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#F43F5E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">6</span>
            </div>
            
            <div className="flex items-center gap-2 border-l border-gray-200 pl-8 cursor-pointer">
              <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
              <span className="text-sm font-medium text-gray-700">English</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm">CO</div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-gray-800 leading-none">Chidi O.</p>
                <p className="text-[10px] text-gray-500 mt-1">Teacher</p>
              </div>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[13px] font-bold text-[#0D685E]">Step 1: Selection</span>
                <span className="text-[13px] font-medium text-gray-400">1 of 3</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#0D685E] rounded-full transition-all duration-500"></div>
              </div>
            </div>

            <section className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 bg-[#E0E7FF] text-[#4F46E5] rounded-full flex items-center justify-center text-[11px] font-bold">1</div>
                <h2 className="text-[15px] font-bold text-gray-800">Select Class Level</h2>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {levels.map((lvl) => (
                  <div 
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`p-10 rounded-3xl border-2 transition-all cursor-pointer text-center flex flex-col items-center gap-6 shadow-sm hover:shadow-md ${
                      selectedLevel === lvl.id ? 'bg-white' : 'border-gray-100 bg-white'
                    }`}
                  >
                    <div className={`p-6 rounded-2xl ${lvl.bg}`}>
                      {lvl.icon}
                    </div>
                    <div>
                      <p className="text-xl font-black text-gray-800 tracking-tight">{lvl.id}</p>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1">{lvl.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SUBJECT SECTION */}
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 bg-[#E0E7FF] text-[#4F46E5] rounded-full flex items-center justify-center text-[11px] font-bold">2</div>
                <h2 className="text-[15px] font-bold text-gray-800">Select Subject</h2>
              </div>
              <div className="grid grid-cols-5 gap-5">
                {subjects.map((sub) => (
                  <div 
                    key={sub.name}
                    onClick={() => setSelectedSubject(sub.name)}
                    className={`p-6 rounded-2xl border flex flex-col items-center gap-4 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                      selectedSubject === sub.name ? 'border-[#0D685E] bg-[#F7FBFB]' : 'border-gray-50 bg-white'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                      {sub.icon}
                    </div>
                    <span className="text-[12px] font-semibold text-gray-700">{sub.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-end mt-16">
              <Button 
                variant="primary" 
                size="lg"
                className="!bg-[#0D685E] hover:!bg-[#0a524a] !rounded-2xl flex items-center gap-3 !px-12 !py-4 font-bold text-sm shadow-lg shadow-[#0D685E]/20"
              >
                Next Step <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;