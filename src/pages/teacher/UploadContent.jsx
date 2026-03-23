import React, { useState, useRef, useEffect } from 'react';
import {
  Type,
  AlignLeft,
  Paperclip,
  X,
  FileText,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Search,
  Bell,
  Globe,
  Layout,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Pencil,
  Send,
  User,
  Clock,
  Image,
  File,
  FileSpreadsheet,
  AlertCircle,
  FlaskConical,
  Sigma,
  Languages,
  Download,
  Calendar,
  GraduationCap,
  ChevronLeft,
  CheckCheck,
  Users,
  Wifi,
  WifiOff,
  Filter,
  Plus,
  Share2,
  TrendingUp,
  Star,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

// ─── Helpers
const formatFileSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getFileStyle = (file) => {
  const ext = file.name.split('.').pop().toLowerCase();
  if (['pdf'].includes(ext))
    return {
      icon: <FileText size={18} />,
      bg: 'bg-red-50',
      text: 'text-red-600',
    };
  if (['doc', 'docx'].includes(ext))
    return {
      icon: <FileText size={18} />,
      bg: 'bg-teal-50',
      text: 'text-teal-700',
    };
  if (['xls', 'xlsx'].includes(ext))
    return {
      icon: <FileSpreadsheet size={18} />,
      bg: 'bg-green-50',
      text: 'text-green-700',
    };
  if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext))
    return {
      icon: <Image size={18} />,
      bg: 'bg-purple-50',
      text: 'text-purple-700',
    };
  return { icon: <File size={18} />, bg: 'bg-gray-100', text: 'text-gray-500' };
};

const NavItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-teal-50 text-teal-800' : 'text-gray-600 hover:bg-gray-100'}`}
  >
    {icon}
    <span className='font-semibold text-sm'>{label}</span>
    {active && <div className='ml-auto w-1 h-5 bg-teal-700 rounded-full' />}
  </div>
);

const Sidebar = ({ activePage = 'upload' }) => (
  <aside className='hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col shrink-0'>
    <div className='p-6'>
      <div className='flex items-center gap-2 text-teal-800'>
        <div className='w-8 h-8 bg-teal-700 rounded-md flex items-center justify-center text-white'>
          <BookOpen size={18} />
        </div>
        <div>
          <h1 className='font-bold text-sm leading-none'>Education Bridge</h1>
          <p className='text-xs text-gray-400'>Teacher Portal</p>
        </div>
      </div>
    </div>
    <nav className='flex-1 px-4 space-y-1 mt-4'>
      <NavItem
        icon={<FileText size={20} />}
        label='Upload Resources'
        active={activePage === 'upload'}
      />
      <NavItem icon={<Layout size={20} />} label='Create Quiz' />
      <NavItem
        icon={<BarChart3 size={20} />}
        label='Performance summary'
        active={activePage === 'performance'}
      />
      <div className='pt-8 pb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest'>
        System
      </div>
      <NavItem icon={<Settings size={20} />} label='Settings' />
    </nav>
    <div className='p-4 border-t border-gray-200'>
      <button className='flex items-center gap-3 text-red-500 font-semibold px-4 py-3 w-full hover:bg-red-50 rounded-lg transition-colors text-sm'>
        <LogOut size={20} className='rotate-180' /> Sign Out
      </button>
    </div>
  </aside>
);

const TopBar = () => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
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
    <header className='h-14 lg:h-16 bg-white border-b border-gray-200 px-4 lg:px-8 flex items-center justify-between shrink-0 gap-4'>
      <div className='relative w-full max-w-xs hidden sm:block'>
        <Search
          className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          size={18}
        />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 text-sm outline-none'
        />
      </div>
      <div className='flex items-center gap-2 text-teal-800 lg:hidden'>
        <div className='w-7 h-7 bg-teal-700 rounded-md flex items-center justify-center text-white'>
          <BookOpen size={15} />
        </div>
        <span className='font-bold text-sm'>Education Bridge</span>
      </div>
      <div className='flex items-center gap-3 lg:gap-5 shrink-0'>
        <div className='relative'>
          <Bell size={20} className='text-gray-500' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center'>
            6
          </span>
        </div>
        <Globe size={20} className='text-gray-500 hidden sm:block' />
        <div className='flex items-center gap-2 lg:gap-3 border-l border-gray-200 pl-3 lg:pl-5'>
          <div className='text-right leading-tight hidden sm:block'>
            <p className='text-sm font-bold'>
              {user?.name?.split(' ').slice(0, 2).join(' ') || 'Teacher'}
            </p>
            <p className='text-xs text-gray-400 capitalize'>
              {user?.role || 'Teacher'}
            </p>
          </div>
          <div className='w-8 h-8 lg:w-9 lg:h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative shrink-0'>
            {getInitials(user?.name)}
            <div className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full'></div>
          </div>
        </div>
      </div>
    </header>
  );
};

// ─── Step indicator bar
const StepBar = ({ current }) => {
  const steps = [
    { n: 1, label: 'Exam Details' },
    { n: 2, label: 'Upload Content' },
    { n: 3, label: 'Review' },
  ];
  return (
    <div className='flex items-center gap-2 sm:gap-4 mb-8 lg:mb-12 flex-wrap'>
      {steps.map((s, i) => {
        const done = current > s.n;
        const active = current === s.n;
        return (
          <React.Fragment key={s.n}>
            <div className='flex items-center gap-2'>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${done ? 'bg-teal-700 text-white' : active ? 'bg-teal-700 text-white ring-4 ring-teal-100' : 'bg-gray-200 text-gray-400'}`}
              >
                {done ? <CheckCheck size={13} /> : s.n}
              </div>
              <div>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-wide ${active ? 'text-teal-700' : done ? 'text-teal-600' : 'text-gray-400'}`}
                >
                  Step {s.n}
                </p>
                <p
                  className={`text-xs font-bold leading-none ${active ? 'text-gray-800' : 'text-gray-400'}`}
                >
                  {s.label}
                </p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 min-w-[20px] rounded transition-all ${done ? 'bg-teal-700' : 'bg-gray-200'}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// STEP 1 — Exam Details

const SUBJECTS = [
  {
    id: 'math',
    label: 'Mathematics',
    sub: 'General Mathematics',
    icon: <Sigma size={22} />,
  },
  {
    id: 'english',
    label: 'English',
    sub: 'Language & Lit.',
    icon: <Languages size={22} />,
  },
  {
    id: 'physics',
    label: 'Physics',
    sub: 'Science',
    icon: <FlaskConical size={22} />,
  },
  {
    id: 'chemistry',
    label: 'Chemistry',
    sub: 'Science',
    icon: <FlaskConical size={22} />,
  },
];

const YEARS = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
];

const ExamDetails = ({ onNext }) => {
  const [subject, setSubject] = useState(null);
  const [year, setYear] = useState(2024);
  const [examType, setExamType] = useState('ssce');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const e = {};
    if (!subject) e.subject = 'Please select a subject.';
    setErrors(e);
    if (Object.keys(e).length === 0) onNext({ subject, year, examType });
  };

  const selectedSubjectLabel =
    SUBJECTS.find((s) => s.id === subject)?.label ?? '';

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-0 animate-in fade-in slide-in-from-right-4 duration-500'>
      <StepBar current={1} />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Select Subject */}
        <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
          <div className='flex items-center gap-2 mb-4'>
            <Layout size={16} className='text-teal-700' />
            <h2 className='font-bold text-sm text-gray-700'>Select Subject</h2>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSubject(s.id);
                  setErrors({});
                }}
                className={`relative flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
                  ${
                    subject === s.id
                      ? 'border-teal-700 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                  }`}
              >
                <div
                  className={`p-2 rounded-lg ${subject === s.id ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  {s.icon}
                </div>
                <div>
                  <p className='font-bold text-sm text-gray-800'>{s.label}</p>
                  <p className='text-[11px] text-gray-400'>{s.sub}</p>
                </div>
                {subject === s.id && (
                  <div className='absolute top-2 right-2 w-5 h-5 bg-teal-700 rounded-full flex items-center justify-center'>
                    <CheckCheck size={11} className='text-white' />
                  </div>
                )}
              </button>
            ))}
          </div>
          {errors.subject && (
            <p className='mt-3 flex items-center gap-1.5 text-xs text-red-500 animate-in fade-in duration-200'>
              <AlertCircle size={12} /> {errors.subject}
            </p>
          )}
        </div>

        {/* year + CTA */}
        <div className='flex flex-col gap-5'>
          <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
            <div className='flex items-center gap-2 mb-4'>
              <Calendar size={16} className='text-teal-700' />
              <h2 className='font-bold text-sm text-gray-700'>Select Year</h2>
            </div>
            <div className='grid grid-cols-3 gap-2'>
              {YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`py-2 rounded-lg text-sm font-semibold transition-all
                    ${
                      year === y
                        ? 'bg-teal-700 text-white shadow-sm shadow-teal-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                    }`}
                >
                  {y}
                </button>
              ))}
            </div>
            {subject && (
              <div className='mt-4 pt-4 border-t border-gray-100 flex items-center justify-between'>
                <span className='text-xs text-gray-400 font-medium'>
                  Selected:
                </span>
                <span className='text-xs font-bold text-teal-700'>
                  {selectedSubjectLabel} • SSCE • {year}
                </span>
              </div>
            )}
          </div>

          {/* CTA card */}
          <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
            <button
              onClick={handleNext}
              className='w-full bg-teal-700 hover:bg-teal-800 text-white rounded-xl py-4 flex items-center justify-center gap-3 font-bold text-sm transition-all shadow-lg shadow-teal-200 group'
            >
              Next: Upload Questions
              <ChevronRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>
            <p className='text-center text-xs text-gray-400 mt-3'>
              Step 1 of 3
            </p>
          </div>
        </div>
      </div>

      {/* Exam Type */}
      <div className='mt-6 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
        <div className='flex items-center gap-2 mb-4'>
          <GraduationCap size={16} className='text-teal-700' />
          <h2 className='font-bold text-sm text-gray-700'>Exam Type</h2>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          {[
            { id: 'ssce', label: 'SSCE / WAEC', sub: 'Senior School' },
            { id: 'utme', label: 'UTME / JAMB', sub: 'Tertiary Entrance' },
          ].map((t) => (
            <label
              key={t.id}
              className={`flex items-center gap-3 flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all
                ${examType === t.id ? 'border-teal-700 bg-teal-50' : 'border-gray-200 hover:border-teal-300'}`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                ${examType === t.id ? 'border-teal-700' : 'border-gray-300'}`}
              >
                {examType === t.id && (
                  <div className='w-2 h-2 bg-teal-700 rounded-full' />
                )}
              </div>
              <input
                type='radio'
                name='examType'
                value={t.id}
                checked={examType === t.id}
                onChange={() => setExamType(t.id)}
                className='hidden'
              />
              <div>
                <p className='font-bold text-sm text-gray-800'>{t.label}</p>
                <p className='text-[11px] text-gray-400'>{t.sub}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// STEP 2 — Upload Content

const SummaryItem = ({ icon, label, value, bgColor }) => (
  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200'>
    <div className='flex items-center gap-3'>
      <div className={`p-2 rounded-lg ${bgColor}`}>{icon}</div>
      <div>
        <p className='text-[10px] text-gray-400 font-semibold uppercase tracking-wider'>
          {label}
        </p>
        <p className='text-sm font-bold text-gray-800'>{value}</p>
      </div>
    </div>
    <CheckCircle2 size={16} className='text-teal-600' />
  </div>
);

const UploadContent = ({ examMeta, onBack, onPublish }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!lessonTitle.trim()) e.title = 'Lesson title is required.';
    if (!lessonContent.trim()) e.content = 'Lesson content is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleReview = () => {
    if (validate()) setShowPreview(true);
  };

  const handleFiles = (files) => {
    const valid = Array.from(files).filter(
      (f) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'image/png',
          'image/jpeg',
          'image/gif',
          'image/webp',
        ].includes(f.type) && f.size <= 10 * 1024 * 1024
    );
    setAttachments((p) => [...p, ...valid]);
  };

  const removeFile = (i) =>
    setAttachments((p) => p.filter((_, idx) => idx !== i));
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);

  // Preview
  if (showPreview) {
    return (
      <div className='fixed inset-0 z-50 bg-gray-100 font-sans text-gray-800 animate-in fade-in duration-300 overflow-y-auto'>
        <div className='p-4 lg:p-8 flex flex-col xl:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto'>
          {/* Preview card */}
          <div className='flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-fit min-w-0'>
            <div className='bg-gray-50 px-4 lg:px-6 py-3 border-b border-gray-200 flex justify-between items-center'>
              <div className='flex items-center gap-2 text-gray-500 font-medium text-sm'>
                <Layout size={14} className='text-teal-700' /> Student View
                Preview
              </div>
              <span className='text-[10px] bg-gray-200 px-2 py-1 rounded font-bold text-gray-500 uppercase'>
                Tablet Mode
              </span>
            </div>
            <div className='p-6 lg:p-10'>
              <span className='bg-teal-50 text-teal-700 text-[10px] font-bold px-3 py-1 rounded uppercase'>
                {examMeta?.subject ?? 'Mathematics'}
              </span>
              <h2 className='text-xl lg:text-2xl font-bold text-gray-900 mt-4 mb-3 tracking-tight break-words'>
                {lessonTitle}
              </h2>
              <div className='flex flex-wrap items-center gap-3 lg:gap-4 text-gray-400 text-sm mb-8'>
                <span className='flex items-center gap-1.5'>
                  <User size={14} /> Mr. Adegoke
                </span>
                <span className='flex items-center gap-1.5'>
                  <Clock size={14} /> 45 mins
                </span>
              </div>
              <div className='whitespace-pre-wrap break-words text-sm lg:text-base text-gray-600 leading-relaxed'>
                {lessonContent}
              </div>

              {/* Downloadable Materials */}
              <div className='mt-8 pt-6 border-t border-dashed border-gray-200'>
                <p className='text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest'>
                  Downloadable Materials
                  {attachments.length > 0 && (
                    <span className='ml-2 bg-teal-700 text-white text-[10px] px-2 py-0.5 rounded-full normal-case font-bold'>
                      {attachments.length}{' '}
                      {attachments.length === 1 ? 'file' : 'files'}
                    </span>
                  )}
                </p>
                {attachments.length === 0 ? (
                  <p className='text-xs text-gray-400 italic'>
                    No attachments uploaded.
                  </p>
                ) : (
                  <div className='flex flex-wrap gap-3'>
                    {attachments.map((file, idx) => {
                      const { icon, bg, text } = getFileStyle(file);
                      return (
                        <div
                          key={idx}
                          className='inline-flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-teal-600 hover:shadow-sm transition-all cursor-pointer'
                        >
                          <div className={`${bg} p-2 rounded ${text}`}>
                            {icon}
                          </div>
                          <div>
                            <p className='text-xs font-bold text-gray-800 max-w-[130px] sm:max-w-[160px] truncate'>
                              {file.name}
                            </p>
                            <p className='text-[10px] text-gray-400'>
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Publishing summary */}
          <div className='w-full xl:w-80 flex flex-col gap-6 shrink-0'>
            <div className='bg-white rounded-xl p-5 lg:p-6 border border-gray-200 shadow-sm'>
              <h3 className='font-bold text-base mb-6 text-gray-800'>
                Publishing Summary
              </h3>
              <div className='space-y-4'>
                <SummaryItem
                  icon={<BookOpen size={18} />}
                  label='Target Class'
                  value='SS2'
                  bgColor='bg-teal-50 text-teal-700'
                />
                <SummaryItem
                  icon={<Layout size={18} />}
                  label='Subject'
                  value={examMeta?.subject ?? 'Mathematics'}
                  bgColor='bg-purple-50 text-purple-700'
                />
                <SummaryItem
                  icon={<Type size={18} />}
                  label='Exam Type'
                  value={
                    examMeta?.examType === 'ssce'
                      ? 'SSCE / WAEC'
                      : 'UTME / JAMB'
                  }
                  bgColor='bg-gray-100 text-gray-500'
                />
                <SummaryItem
                  icon={<Calendar size={18} />}
                  label='Year'
                  value={examMeta?.year ?? 2024}
                  bgColor='bg-amber-50 text-amber-600'
                />
              </div>
              <label className='mt-8 flex items-start gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  className='mt-1 rounded border-gray-300 text-teal-700'
                />
                <p className='text-xs text-gray-500 leading-tight'>
                  Notify students immediately when they sync their devices.
                </p>
              </label>
            </div>
            <div className='space-y-3'>
              <button
                onClick={() => onPublish()}
                className='w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-lg shadow-teal-200'
              >
                <Send size={18} /> Save & Publish
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className='w-full bg-white border border-gray-300 text-gray-700 py-4 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-gray-50 transition-colors text-sm'
              >
                <Pencil size={18} /> Edit Content
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Upload form ──
  return (
    <div className='max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500 px-4 sm:px-0'>
      <StepBar current={2} />

      <div className='space-y-8'>
        {/* 1 – Lesson Title */}
        <section>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-7 h-7 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0'>
              1
            </div>
            <h2 className='font-bold text-base text-gray-800'>
              Lesson Title <span className='text-red-500'>*</span>
            </h2>
          </div>
          <div className='relative group'>
            <div
              className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${errors.title ? 'text-red-500' : 'text-gray-400 group-focus-within:text-teal-700'}`}
            >
              <Type size={20} />
            </div>
            <input
              type='text'
              value={lessonTitle}
              onChange={(e) => {
                setLessonTitle(e.target.value);
                if (errors.title) setErrors((p) => ({ ...p, title: '' }));
              }}
              placeholder='e.g. Introduction to Quadratic Equations'
              className={`w-full bg-white border rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all font-medium
                ${errors.title ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-teal-600'}`}
            />
          </div>
          {errors.title && (
            <p className='mt-2 flex items-center gap-1.5 text-xs text-red-500 animate-in fade-in duration-200'>
              <AlertCircle size={13} /> {errors.title}
            </p>
          )}
        </section>

        <section>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-7 h-7 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0'>
              2
            </div>
            <h2 className='font-bold text-base text-gray-800'>
              Lesson Content <span className='text-red-500'>*</span>
            </h2>
          </div>
          <div
            className={`border rounded-xl bg-white overflow-hidden transition-all ${errors.content ? 'border-red-400' : 'border-gray-200 focus-within:border-teal-600'}`}
          >
            <div className='flex items-center gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200'>
              <button
                type='button'
                className='p-1.5 hover:bg-gray-200 rounded text-gray-600 font-bold'
              >
                B
              </button>
              <button
                type='button'
                className='p-1.5 hover:bg-gray-200 rounded text-gray-600 italic'
              >
                I
              </button>
              <button
                type='button'
                className='p-1.5 hover:bg-gray-200 rounded text-gray-600 underline'
              >
                U
              </button>
              <div className='h-4 w-[1px] bg-gray-200 mx-1'></div>
              <AlignLeft size={18} className='text-gray-400 cursor-pointer' />
            </div>
            <textarea
              rows='10'
              value={lessonContent}
              onChange={(e) => {
                setLessonContent(e.target.value);
                if (errors.content) setErrors((p) => ({ ...p, content: '' }));
              }}
              placeholder='Type your lesson notes here...'
              className={`w-full p-6 text-sm outline-none resize-none placeholder:text-gray-300 transition-colors ${errors.content ? 'bg-red-50' : ''}`}
            />
          </div>
          {errors.content && (
            <p className='mt-2 flex items-center gap-1.5 text-xs text-red-500 animate-in fade-in duration-200'>
              <AlertCircle size={13} /> {errors.content}
            </p>
          )}
        </section>

        <section>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-7 h-7 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0'>
              3
            </div>
            <h2 className='font-bold text-base text-gray-800'>
              Attachments{' '}
              <span className='text-gray-400 font-normal text-sm'>
                (Optional)
              </span>
            </h2>
          </div>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer group
              ${isDragging ? 'border-teal-600 bg-teal-50 scale-[1.01]' : 'border-gray-300 bg-gray-50 hover:bg-teal-50 hover:border-teal-500'}`}
          >
            <input
              ref={fileInputRef}
              type='file'
              multiple
              accept='.pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.webp'
              className='hidden'
              onChange={(e) => handleFiles(e.target.files)}
            />
            <div
              className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 transition-transform ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}
            >
              <Paperclip className='text-teal-700' size={24} />
            </div>
            <p className='text-sm font-bold text-gray-700'>
              Click to upload or drag and drop
            </p>
            <p className='text-xs text-gray-400 mt-1'>
              PDF, DOCX, or Images (Max 10MB)
            </p>
          </div>
          {attachments.length > 0 && (
            <div className='mt-4 space-y-2'>
              {attachments.map((file, idx) => {
                const { icon, bg, text } = getFileStyle(file);
                return (
                  <div
                    key={idx}
                    className='flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-200'
                  >
                    <div className='flex items-center gap-3 min-w-0'>
                      <div className={`${bg} p-2 rounded-lg ${text} shrink-0`}>
                        {icon}
                      </div>
                      <div className='min-w-0'>
                        <p className='text-xs font-bold text-gray-800 truncate max-w-[160px] sm:max-w-xs md:max-w-sm'>
                          {file.name}
                        </p>
                        <p className='text-[10px] text-gray-400'>
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(idx)}
                      className='p-1.5 hover:bg-red-50 hover:text-red-500 text-gray-400 rounded-lg transition-colors shrink-0 ml-3'
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mt-12 lg:mt-16 pt-8 border-t border-gray-200'>
        <button
          onClick={onBack}
          className='flex items-center gap-2 text-gray-500 font-bold hover:text-teal-700 transition-colors uppercase text-xs tracking-wider w-full sm:w-auto justify-center sm:justify-start'
        >
          <ArrowLeft size={18} /> Back to Exam Details
        </button>
        <button
          onClick={handleReview}
          className='bg-teal-700 hover:bg-teal-800 text-white rounded-xl flex items-center gap-3 px-10 lg:px-12 py-4 font-bold text-sm shadow-lg shadow-teal-200 w-full sm:w-auto justify-center transition-all'
        >
          Review Content <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// SUCCESS TOAST
const SuccessToast = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className='fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-400'>
      <div className='flex items-center gap-3 bg-teal-700 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-teal-300 min-w-[300px]'>
        <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
          <CheckCheck size={18} className='text-white' />
        </div>
        <div>
          <p className='font-bold text-sm'>Published Successfully!</p>
          <p className='text-xs text-teal-100 mt-0.5'>
            Resource is now live for students.
          </p>
        </div>
        <div className='ml-4 w-1 h-8 bg-white/20 rounded-full overflow-hidden'>
          <div
            className='w-full bg-white/60 rounded-full'
            style={{
              height: '100%',
              animation: 'none',
              transition: 'height 3.5s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// PERFORMANCE SUMMARY ANALYTICS PAGE

const barData = [
  { subject: 'Math', score: 78 },
  { subject: 'Eng', score: 65 },
  { subject: 'Phy', score: 82, highlight: true },
  { subject: 'Chem', score: 71 },
  { subject: 'Bio', score: 60 },
  { subject: 'Econ', score: 74 },
];

const linePoints = [52, 58, 61, 67, 63, 72, 78, 82];
const lineLabels = ['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5', 'Wk6', 'Wk7', 'Wk8'];

const SVGBarChart = () => {
  const W = 360,
    H = 160,
    PAD = { t: 10, r: 10, b: 28, l: 10 };
  const chartW = W - PAD.l - PAD.r;
  const chartH = H - PAD.t - PAD.b;
  const max = 100;
  const barW = Math.floor((chartW / barData.length) * 0.55);
  const gap = chartW / barData.length;
  const [hovered, setHovered] = useState(null);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ height: 180 }}>
      {[0, 25, 50, 75, 100].map((v) => {
        const y = PAD.t + chartH - (v / max) * chartH;
        return (
          <line
            key={v}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={y}
            y2={y}
            stroke='#f3f4f6'
            strokeWidth='1'
          />
        );
      })}
      {barData.map((d, i) => {
        const bh = (d.score / max) * chartH;
        const bx = PAD.l + gap * i + gap / 2 - barW / 2;
        const by = PAD.t + chartH - bh;
        const fill = d.highlight ? '#f97316' : '#14b8a6';
        const isHov = hovered === i;
        return (
          <g
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <rect
              x={bx}
              y={by}
              width={barW}
              height={bh}
              fill={fill}
              opacity={isHov ? 1 : 0.85}
              rx='4'
              ry='4'
              style={{ transition: 'opacity 0.15s' }}
            />
            {isHov && (
              <g>
                <rect
                  x={bx + barW / 2 - 18}
                  y={by - 24}
                  width={36}
                  height={18}
                  rx='5'
                  fill='#1f2937'
                />
                <text
                  x={bx + barW / 2}
                  y={by - 11}
                  textAnchor='middle'
                  fill='white'
                  fontSize='10'
                  fontWeight='bold'
                >
                  {d.score}%
                </text>
              </g>
            )}
            <text
              x={bx + barW / 2}
              y={H - 6}
              textAnchor='middle'
              fill='#9ca3af'
              fontSize='10'
            >
              {d.subject}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const SVGLineChart = () => {
  const W = 360,
    H = 160,
    PAD = { t: 12, r: 12, b: 28, l: 12 };
  const chartW = W - PAD.l - PAD.r;
  const chartH = H - PAD.t - PAD.b;
  const min = 40,
    max = 92;
  const [hovered, setHovered] = useState(null);

  const pts = linePoints.map((v, i) => ({
    x: PAD.l + (i / (linePoints.length - 1)) * chartW,
    y: PAD.t + chartH - ((v - min) / (max - min)) * chartH,
    v,
  }));

  const polyline = pts.map((p) => `${p.x},${p.y}`).join(' ');
  const areaPath =
    `M${pts[0].x},${pts[0].y} ` +
    pts
      .slice(1)
      .map((p) => `L${p.x},${p.y}`)
      .join(' ') +
    ` L${pts[pts.length - 1].x},${PAD.t + chartH} L${pts[0].x},${PAD.t + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className='w-full' style={{ height: 180 }}>
      <defs>
        <linearGradient id='lineGrad' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='#14b8a6' stopOpacity='0.25' />
          <stop offset='100%' stopColor='#14b8a6' stopOpacity='0' />
        </linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((v) => {
        const y = PAD.t + chartH - ((v - min) / (max - min)) * chartH;
        if (y < PAD.t || y > PAD.t + chartH) return null;
        return (
          <line
            key={v}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={y}
            y2={y}
            stroke='#f3f4f6'
            strokeWidth='1'
          />
        );
      })}
      <path d={areaPath} fill='url(#lineGrad)' />
      <polyline
        points={polyline}
        fill='none'
        stroke='#14b8a6'
        strokeWidth='2.5'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      {pts.map((p, i) => (
        <g
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{ cursor: 'default' }}
        >
          <circle
            cx={p.x}
            cy={p.y}
            r={hovered === i ? 5 : 3}
            fill='#14b8a6'
            stroke='white'
            strokeWidth='2'
            style={{ transition: 'r 0.15s' }}
          />
          {hovered === i && (
            <g>
              <rect
                x={p.x - 18}
                y={p.y - 26}
                width={36}
                height={18}
                rx='5'
                fill='#1f2937'
              />
              <text
                x={p.x}
                y={p.y - 13}
                textAnchor='middle'
                fill='white'
                fontSize='10'
                fontWeight='bold'
              >
                {p.v}%
              </text>
            </g>
          )}
          <text
            x={p.x}
            y={H - 5}
            textAnchor='middle'
            fill='#9ca3af'
            fontSize='9'
          >
            {lineLabels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
};

const weakTopics = [
  {
    topic: 'Quadratic Equations',
    subject: 'Mathematics',
    score: 42,
    color: 'text-red-500',
  },
  {
    topic: 'Vectorisation Motion',
    subject: 'English',
    score: 46,
    color: 'text-orange-500',
  },
  {
    topic: 'Model Matter',
    subject: 'Phy g(3)',
    score: 51,
    color: 'text-orange-400',
  },
  {
    topic: 'Organic Chemistry',
    subject: 'Chemistry',
    score: 58,
    color: 'text-yellow-500',
  },
  {
    topic: 'Demand & Supply',
    subject: 'Economics',
    score: 48,
    color: 'text-red-400',
  },
];

const resources = [
  { name: 'Math_Formula...pdf', type: 'pdf', size: '2.1 MB', views: 134 },
  { name: 'English_Essay...docx', type: 'docx', size: '890 KB', views: 98 },
  { name: 'Physics_Motion...jpg', type: 'img', size: '1.4 MB', views: 76 },
  { name: 'Drop here...', type: 'drop', size: null, views: null },
];

const PerformanceSummary = ({ onUploadAnother }) => {
  return (
    <div className='fixed inset-0 z-50 flex bg-gray-50 font-sans animate-in fade-in duration-300'>
      <Sidebar activePage='performance' />
      <div className='flex-1 flex flex-col h-screen overflow-hidden min-w-0'>
        <TopBar />
        <div className='flex-1 overflow-y-auto p-4 lg:p-6'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
            <div className='bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex items-center gap-4'>
              <div className='relative w-14 h-14 shrink-0'>
                <svg viewBox='0 0 36 36' className='w-14 h-14 -rotate-90'>
                  <circle
                    cx='18'
                    cy='18'
                    r='15.9'
                    fill='none'
                    stroke='#e5e7eb'
                    strokeWidth='3'
                  />
                  <circle
                    cx='18'
                    cy='18'
                    r='15.9'
                    fill='none'
                    stroke='#14b8a6'
                    strokeWidth='3'
                    strokeDasharray={`${82.4} ${100 - 82.4}`}
                    strokeLinecap='round'
                  />
                </svg>
                <span className='absolute inset-0 flex items-center justify-center text-[11px] font-bold text-teal-700'>
                  82.4%
                </span>
              </div>
              <div>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider font-semibold'>
                  Avg. Completion Rate
                </p>
                <p className='text-xl font-bold text-gray-800'>82.4%</p>
                <p className='text-[10px] text-green-500 font-semibold mt-0.5'>
                  ↑ 4.2% from last week
                </p>
              </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex items-center gap-4'>
              <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0'>
                <Users size={22} className='text-blue-500' />
              </div>
              <div>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider font-semibold'>
                  Active Students Today
                </p>
                <p className='text-xl font-bold text-gray-800'>
                  156 / <span className='text-gray-400'>160</span>
                </p>
                <p className='text-[10px] text-gray-400 mt-0.5'>
                  97.5% Online & Synced
                </p>
              </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex items-center gap-4'>
              <div className='w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0'>
                <WifiOff size={22} className='text-orange-400' />
              </div>
              <div>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider font-semibold'>
                  Pending Sync
                </p>
                <p className='text-xl font-bold text-gray-800'>12</p>
                <p className='text-[10px] text-orange-400 font-semibold mt-0.5'>
                  12 device(s) not syncing
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6'>
            <div>
              <h1 className='text-lg font-bold text-gray-900'>
                Performance Summary Analytics
              </h1>
              <div className='flex flex-wrap items-center gap-3 mt-1'>
                <span className='flex items-center gap-1 text-xs text-gray-500'>
                  <User size={12} /> Class: SS3 DIANA A.
                </span>
                <span className='flex items-center gap-1 text-xs text-gray-500'>
                  <Calendar size={12} /> April 7, 2025
                </span>
                <span className='flex items-center gap-1 text-xs text-green-500 font-semibold'>
                  <Wifi size={12} /> All Devices Active Now
                </span>
              </div>
            </div>
            <button
              onClick={onUploadAnother}
              className='flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-teal-200 shrink-0'
            >
              <Plus size={16} /> New Summary
            </button>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
            <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-bold text-sm text-gray-800'>
                  Average Scores per Subject
                </h2>
                <div className='flex items-center gap-3 text-[10px] text-gray-400 font-semibold'>
                  <span className='flex items-center gap-1'>
                    <span className='w-2.5 h-2.5 rounded-sm bg-teal-500 inline-block' />{' '}
                    Class Avg
                  </span>
                  <span className='flex items-center gap-1'>
                    <span className='w-2.5 h-2.5 rounded-sm bg-orange-400 inline-block' />{' '}
                    Range
                  </span>
                </div>
              </div>
              <SVGBarChart />
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
              <div className='flex items-center justify-between mb-1'>
                <h2 className='font-bold text-sm text-gray-800'>
                  General Completion Rate
                </h2>
                <span className='text-2xl font-bold text-teal-600'>82%</span>
              </div>
              <p className='text-[10px] text-gray-400 mb-3'>
                8-week trend across all subjects
              </p>
              <SVGLineChart />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-bold text-sm text-gray-800'>
                  Common Weak Topics
                </h2>
                <button className='flex items-center gap-1.5 bg-orange-100 hover:bg-orange-200 text-orange-600 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors'>
                  <Star size={11} /> Grade Attention
                </button>
              </div>
              <div className='mb-3 grid grid-cols-3 gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1'>
                <span>Topic</span>
                <span>Subject</span>
                <span className='text-right'>Avg. Score</span>
              </div>
              <div className='space-y-2'>
                {weakTopics.map((t, i) => (
                  <div
                    key={i}
                    className='grid grid-cols-3 gap-2 items-center px-3 py-2.5 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors'
                  >
                    <span className='text-xs font-semibold text-gray-700 truncate'>
                      {t.topic}
                    </span>
                    <span className='text-xs text-gray-400'>{t.subject}</span>
                    <span className={`text-xs font-bold text-right ${t.color}`}>
                      {t.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm'>
              <div className='flex items-center justify-between mb-1'>
                <h2 className='font-bold text-sm text-gray-800'>
                  Resource Library
                </h2>
                <div className='flex items-center gap-2'>
                  <button className='flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 border border-gray-200 px-2.5 py-1.5 rounded-lg transition-colors'>
                    <SlidersHorizontal size={11} /> Filter
                  </button>
                  <button
                    onClick={onUploadAnother}
                    className='flex items-center gap-1 text-[11px] bg-teal-700 hover:bg-teal-800 text-white px-2.5 py-1.5 rounded-lg font-bold transition-colors'
                  >
                    <Plus size={11} /> New Video
                  </button>
                </div>
              </div>
              <p className='text-[10px] text-gray-400 mb-4'>
                3 resources • Last updated just now
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                {resources.map((r, i) => {
                  if (r.type === 'drop') {
                    return (
                      <button
                        key={i}
                        onClick={onUploadAnother}
                        className='flex flex-col items-center justify-center gap-1 border-2 border-dashed border-gray-200 rounded-xl p-4 hover:border-teal-400 hover:bg-teal-50 transition-all aspect-square text-gray-300 hover:text-teal-500'
                      >
                        <Plus size={22} />
                        <span className='text-[10px] font-semibold text-center leading-tight'>
                          Drop or Upload
                        </span>
                      </button>
                    );
                  }
                  const iconMap = {
                    pdf: {
                      bg: 'bg-red-50',
                      text: 'text-red-500',
                      icon: <FileText size={20} />,
                    },
                    docx: {
                      bg: 'bg-teal-50',
                      text: 'text-teal-700',
                      icon: <FileText size={20} />,
                    },
                    img: {
                      bg: 'bg-purple-50',
                      text: 'text-purple-500',
                      icon: <Image size={20} />,
                    },
                  };
                  const style = iconMap[r.type] ?? iconMap.pdf;
                  return (
                    <div
                      key={i}
                      className='flex flex-col border border-gray-200 rounded-xl p-3 hover:shadow-md hover:border-teal-300 transition-all cursor-pointer group'
                    >
                      <div
                        className={`${style.bg} ${style.text} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}
                      >
                        {style.icon}
                      </div>
                      <p className='text-[11px] font-bold text-gray-700 leading-tight truncate mb-1'>
                        {r.name}
                      </p>
                      <p className='text-[10px] text-gray-400'>{r.size}</p>
                      <div className='flex items-center justify-between mt-3 pt-2 border-t border-gray-100'>
                        <span className='flex items-center gap-1 text-[10px] text-gray-400'>
                          <Eye size={10} /> {r.views}
                        </span>
                        <button className='text-gray-300 hover:text-teal-600 transition-colors'>
                          <Share2 size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadStep = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [examMeta, setExamMeta] = useState(null);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handlePublish = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setShowPerformance(true);
    }, 1800);
  };

  const handleUploadAnother = () => {
    setShowPerformance(false);
    setStep(1);
    setExamMeta(null);
    navigate('/teacher-dashboard');
  };

  if (showPerformance) {
    return <PerformanceSummary onUploadAnother={handleUploadAnother} />;
  }

  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      {showToast && <SuccessToast onDone={() => setShowToast(false)} />}
      <main className='flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12'>
        {step === 1 && (
          <ExamDetails
            onNext={(meta) => {
              setExamMeta(meta);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <UploadContent
            examMeta={examMeta}
            onBack={() => setStep(1)}
            onPublish={handlePublish}
          />
        )}
      </main>
    </div>
  );
};

export default UploadStep;
