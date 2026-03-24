import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Upload,
  X,
  FileText,
  Check,
  Menu,
} from 'lucide-react';
import Button from '../../component/Button';

const CreateLesson = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subject, levelName } = location.state || {};

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [teacher, setTeacher] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get user from localStorage
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    setTeacher(JSON.parse(userStr));
  }, [navigate]);

  // Redirect if no state (direct access)
  useEffect(() => {
    if (!subject || !levelName) {
      navigate('/teacher-dashboard');
    }
  }, [subject, levelName, navigate]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (selected.size > maxSize) {
        alert('File too large. Max size is 5MB.');
        return;
      }
      setFile(selected);
      setFileName(selected.name);
    }
  };

  const removeFile = () => {
    setFile(null);
    setFileName('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a resource title.');
      return;
    }

    setSaving(true);
    const token = localStorage.getItem('token');
    const API_URL =
      import.meta.env.VITE_API_URL ||
      'https://edu-bridge-backend-z68e.onrender.com';

    // Prepare lesson data (multilingual title/description as JSONB)
    const lessonData = {
      title: { en: title },
      description: { en: content },
      subject,
      grade_level: levelName,
      content_type: file ? 'mixed' : 'text',
      difficulty: 1,
      // content_url will be added later after file upload to storage
    };

    try {
      const res = await fetch(`${API_URL}/api/lessons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(lessonData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to create lesson');
      }

      setSuccess(true);
      setTimeout(() => {
        navigate('/teacher-dashboard');
      }, 2000);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className='flex h-screen bg-[#F9FAFB] font-sans relative'>
      {/* Sidebar backdrop */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar (identical to TeacherDashboard) */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}
      >
        <div className='p-6 mb-4'>
          <div className='flex items-center gap-2'>
            <div className='bg-[#0D685E] p-2 rounded-lg'>
              <GraduationCap className='text-white' size={20} />
            </div>
            <div>
              <h1 className='font-bold text-[#0D685E] text-sm tracking-tight'>
                Education Bridge
              </h1>
              <p className='text-[10px] text-gray-500'>Teacher Portal</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className='absolute top-4 right-4 lg:hidden'
          >
            <X size={20} />
          </button>
        </div>

        <nav className='flex-1 px-4 space-y-1 overflow-y-auto'>
          <div className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-[13px] font-medium cursor-pointer transition-colors'>
            <CloudUpload size={20} /> Upload Resources
          </div>
          <div className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-[13px] font-medium cursor-pointer transition-colors'>
            <PlusSquare size={20} /> Create Quiz
          </div>
          <div className='flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl text-[13px] font-medium cursor-pointer transition-colors'>
            <BarChart3 size={20} /> Performance summary
          </div>

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
            className='w-full flex items-center justify-start gap-3 !bg-transparent !text-[#F43F5E] hover:!bg-red-50 !px-2 !py-2 !shadow-none font-medium text-[13px]'
            onClick={handleLogout}
          >
            <LogOut size={20} /> Sign Out
          </Button>
        </div>
      </aside>

      <main className='flex-1 flex flex-col overflow-hidden'>
        {/* Header (identical to TeacherDashboard) */}
        <header className='h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-10'>
          <button
            onClick={() => setSidebarOpen(true)}
            className='lg:hidden p-2 text-gray-600 hover:text-[#0D685E]'
          >
            <Menu size={24} />
          </button>
          <div className='relative flex-1 max-w-md ml-4 lg:ml-0'>
            <Search
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder='Search'
              className='w-full border border-gray-200 rounded-full py-2 pl-12 pr-4 text-sm focus:border-[#0D685E] outline-none transition-all'
            />
          </div>
          <div className='flex items-center gap-4 sm:gap-8'>
            <div className='relative cursor-pointer'>
              <Bell size={22} className='text-gray-600' />
              <span className='absolute -top-1.5 -right-1.5 bg-[#F43F5E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white'>
                6
              </span>
            </div>
            <div className='hidden sm:flex items-center gap-2 border-l border-gray-200 pl-8 cursor-pointer'>
              <img
                src='https://flagcdn.com/w20/gb.png'
                alt='UK'
                className='w-5 h-3.5 object-cover rounded-sm shadow-sm'
              />
              <span className='text-sm font-medium text-gray-700'>English</span>
              <ChevronDown size={14} className='text-gray-400' />
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
              <div className='w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm'>
                {teacher?.name
                  ?.split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2) || 'T'}
              </div>
              <div className='text-left hidden sm:block'>
                <p className='text-[13px] font-bold text-gray-800 leading-none'>
                  {teacher?.name || 'Teacher'}
                </p>
                <p className='text-[10px] text-gray-500 mt-1'>
                  {teacher?.role || 'Teacher'}
                </p>
              </div>
              <ChevronDown
                size={14}
                className='text-gray-400 hidden sm:block'
              />
            </div>
          </div>
        </header>

        {/* Main content area */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-12'>
          <div className='max-w-3xl mx-auto'>
            <div className='mb-8 sm:mb-12'>
              <div className='flex justify-between items-center mb-3'>
                <span className='text-[13px] font-bold text-[#0D685E]'>
                  Step 2: Create Lesson
                </span>
                <span className='text-[13px] font-medium text-gray-400'>
                  2 of 3
                </span>
              </div>
              <div className='w-full h-1.5 bg-gray-200 rounded-full overflow-hidden'>
                <div className='w-2/3 h-full bg-[#0D685E] rounded-full transition-all duration-500'></div>
              </div>
            </div>

            <div className='flex items-center gap-4 mb-6'>
              <div className='bg-white rounded-xl shadow-sm p-4 flex-1 border border-gray-200'>
                <p className='text-xs text-gray-500 mb-1'>CURRENTLY EDITING</p>
                <p className='text-lg font-bold text-[#0D685E]'>
                  {levelName} {subject}
                </p>
              </div>
            </div>

            {success ? (
              <div className='bg-green-50 border border-green-200 rounded-xl p-8 text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Check size={32} className='text-green-600' />
                </div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                  Lesson Created!
                </h2>
                <p className='text-gray-600 mb-4'>
                  Redirecting to dashboard...
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='bg-white rounded-xl shadow-md p-6 space-y-6 border border-gray-200'
              >
                {/* Resource Title */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Resource Title <span className='text-red-500'>*</span>
                  </label>
                  <p className='text-xs text-gray-500 mb-2'>
                    e.g., Introduction to Quadratic Equations – Week 3
                  </p>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D685E]'
                    placeholder='Give your learning material a clear, descriptive title.'
                  />
                </div>

                {/* Learning Material (rich text placeholder – textarea for MVP) */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Learning Material <span className='text-red-500'>*</span>
                  </label>
                  <p className='text-xs text-gray-500 mb-2'>
                    Paste your lesson notes, explanations, or study guide
                    content here...
                  </p>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D685E] font-mono text-sm'
                    placeholder='Type or paste your lesson content here...'
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Attach Materials (Optional)
                  </label>
                  <p className='text-xs text-gray-500 mb-2'>
                    PDF, DOCX, or TXT (Max 5MB)
                  </p>
                  {!file ? (
                    <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0D685E] transition'>
                      <input
                        type='file'
                        id='file-upload'
                        accept='.pdf,.docx,.txt'
                        onChange={handleFileChange}
                        className='hidden'
                      />
                      <label
                        htmlFor='file-upload'
                        className='cursor-pointer flex flex-col items-center gap-2'
                      >
                        <Upload size={32} className='text-gray-400' />
                        <span className='text-sm text-gray-600'>
                          Click to upload or drag and drop
                        </span>
                      </label>
                    </div>
                  ) : (
                    <div className='flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3'>
                      <div className='flex items-center gap-3'>
                        <FileText size={20} className='text-[#0D685E]' />
                        <span className='text-sm text-gray-700'>
                          {fileName}
                        </span>
                      </div>
                      <button
                        type='button'
                        onClick={removeFile}
                        className='text-gray-500 hover:text-red-500'
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className='flex justify-end gap-3 pt-4 border-t border-gray-200'>
                  <Button
                    type='button'
                    variant='secondary'
                    onClick={() => navigate(-1)}
                    className='!bg-gray-200 !text-gray-800 hover:!bg-gray-300'
                  >
                    Cancel
                  </Button>
                  <Button
                    type='submit'
                    disabled={saving}
                    className='!bg-[#0D685E] hover:!bg-[#0a524a] !text-white !px-8'
                  >
                    {saving ? 'Creating...' : 'Create Lesson'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateLesson;
