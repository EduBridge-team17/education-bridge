import React, { useState, useEffect } from 'react';
import {
  CloudUpload, PlusSquare, BarChart3, Settings, LogOut, Search, Bell,
  ChevronDown, BookText, FlaskConical, GraduationCap, Calculator, Book,
  Zap, Leaf, LineChart, Globe2, Users2, History, ArrowRight, Menu, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teacher, setTeacher] = useState(null);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [classProgress, setClassProgress] = useState(null);

  // Get user from localStorage (set during login)
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    const user = JSON.parse(userStr);
    setTeacher(user);
  }, [navigate]);

  // Fetch teacher's classes and subjects when teacher is loaded
  useEffect(() => {
    if (!teacher) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const API_URL = import.meta.env.VITE_API_URL || 'https://edu-bridge-backend-z68e.onrender.com';

        // Fetch classes
        const classesRes = await fetch(`${API_URL}/api/classes?teacher_id=${teacher.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (classesRes.ok) {
          const classesData = await classesRes.json();
          setClasses(classesData);
          if (classesData.length > 0) setSelectedClass(classesData[0].id);
        } else {
          console.error('Failed to fetch classes');
        }

        // Fetch subjects
        const subjectsRes = await fetch(`${API_URL}/api/subjects`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (subjectsRes.ok) {
          const subjectsData = await subjectsRes.json();
          setSubjects(subjectsData);
        } else {
          console.error('Failed to fetch subjects');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [teacher]);

  // Fetch class progress when a class is selected
  useEffect(() => {
    if (!selectedClass) return;

    const fetchProgress = async () => {
      const token = localStorage.getItem('token');
      const API_URL = import.meta.env.VITE_API_URL || 'https://edu-bridge-backend-z68e.onrender.com';
      const res = await fetch(`${API_URL}/api/progress/teacher/${selectedClass}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setClassProgress(data);
      }
    };
    fetchProgress();
  }, [selectedClass]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Fallback icons for subjects (you can expand this mapping)
  const subjectIconMap = {
    Mathematics: <Calculator size={20} className="text-blue-500" />,
    English: <Book size={20} className="text-red-400" />,
    Physics: <Zap size={20} className="text-purple-400" />,
    Chemistry: <FlaskConical size={20} className="text-[#22C55E]" />,
    Biology: <Leaf size={20} className="text-green-600" />,
    Economics: <LineChart size={20} className="text-orange-400" />,
    Geography: <Globe2 size={20} className="text-orange-600" />,
    Civics: <Users2 size={20} className="text-indigo-600" />,
    'Agric Sci.': <Leaf size={20} className="text-lime-600" />,
    Literature: <History size={20} className="text-pink-500" />,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0D685E]"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans relative">
      {/* Sidebar (same as before) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
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
          <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 lg:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
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
            onClick={handleLogout}
          >
            <LogOut size={20} /> Sign Out
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-10">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-gray-600 hover:text-[#0D685E]">
            <Menu size={24} />
          </button>
          <div className="relative flex-1 max-w-md ml-4 lg:ml-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search" className="w-full border border-gray-200 rounded-full py-2 pl-12 pr-4 text-sm focus:border-[#0D685E] outline-none transition-all" />
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="relative cursor-pointer">
              <Bell size={22} className="text-gray-600" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#F43F5E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">6</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-gray-200 pl-8 cursor-pointer">
              <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
              <span className="text-sm font-medium text-gray-700">English</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm">
                {teacher?.name?.split(' ').map(n => n[0]).join('').slice(0,2) || 'T'}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[13px] font-bold text-gray-800 leading-none">{teacher?.name || 'Teacher'}</p>
                <p className="text-[10px] text-gray-500 mt-1">{teacher?.role || 'Teacher'}</p>
              </div>
              <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Step indicator */}
            <div className="mb-8 sm:mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[13px] font-bold text-[#0D685E]">Step 1: Selection</span>
                <span className="text-[13px] font-medium text-gray-400">1 of 3</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#0D685E] rounded-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Class selection (dynamic) */}
            <section className="mb-10 sm:mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 bg-[#E0E7FF] text-[#4F46E5] rounded-full flex items-center justify-center text-[11px] font-bold">1</div>
                <h2 className="text-[15px] font-bold text-gray-800">Select Class</h2>
              </div>
              {classes.length === 0 ? (
                <p className="text-gray-500">You have no classes assigned yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      onClick={() => setSelectedClass(cls.id)}
                      className={`p-6 sm:p-10 rounded-3xl border-2 transition-all cursor-pointer text-center flex flex-col items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md ${
                        selectedClass === cls.id ? 'bg-white border-[#0D685E]' : 'border-gray-100 bg-white'
                      }`}
                    >
                      <div className="p-4 sm:p-6 rounded-2xl bg-[#EFF6FF]">
                        <BookText className="text-[#3B82F6]" size={36} />
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl font-black text-gray-800 tracking-tight">{cls.name}</p>
                        <p className="text-[8px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-1">Class</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Subject selection (dynamic) */}
            <section className="mb-10 sm:mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 bg-[#E0E7FF] text-[#4F46E5] rounded-full flex items-center justify-center text-[11px] font-bold">2</div>
                <h2 className="text-[15px] font-bold text-gray-800">Select Subject</h2>
              </div>
              {subjects.length === 0 ? (
                <p className="text-gray-500">No subjects available.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
                  {subjects.map((sub) => (
                    <div
                      key={sub}
                      onClick={() => setSelectedSubject(sub)}
                      className={`p-4 sm:p-6 rounded-2xl border flex flex-col items-center gap-3 sm:gap-4 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                        selectedSubject === sub ? 'border-[#0D685E] bg-[#F7FBFB]' : 'border-gray-50 bg-white'
                      }`}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        {subjectIconMap[sub] || <Book size={20} />}
                      </div>
                      <span className="text-[10px] sm:text-[12px] font-semibold text-gray-700 text-center">{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Next button */}
            <div className="flex justify-end mt-8 sm:mt-16">
              <Button
                variant="primary"
                size="lg"
                className="!bg-[#0D685E] hover:!bg-[#0a524a] !rounded-2xl flex items-center gap-3 !px-6 sm:!px-12 !py-3 sm:!py-4 font-bold text-xs sm:text-sm shadow-lg shadow-[#0D685E]/20"
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