import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StudentSideNav from './components/StudentSideNav';
import QuizResultsModal from './components/QuizResultsModal';

// ── Quiz data per topic ────────────────────────────────────────────────────────
const quizData = {
  algebra: {
    subject: 'Mathematics',
    subjectId: 'math',
    topic: 'Algebraic Processes',
    estMins: 5,
    questions: [
      { id: 1, text: 'If 2x + 5 = 15, what is the value of x?',        options: ['5', '10', '2.5', '7'],    correct: 0 },
      { id: 2, text: 'Simplify: 3a + 2b − a + 4b',                      options: ['2a + 6b', '4a + 6b', '2a + 2b', '4a + 2b'], correct: 0 },
      { id: 3, text: 'What is the value of y if y − 8 = 12?',            options: ['4', '20', '96', '−4'],   correct: 1 },
      { id: 4, text: 'Expand: 3(2x − 4)',                                options: ['6x − 12', '6x − 4', '5x − 7', '6x + 12'], correct: 0 },
      { id: 5, text: 'Factorise: x² + 5x + 6',                          options: ['(x+2)(x+3)', '(x+1)(x+6)', '(x−2)(x−3)', '(x+5)(x+1)'], correct: 0 },
      { id: 6, text: 'Solve for x: 4x = 36',                             options: ['9', '32', '40', '144'],  correct: 0 },
      { id: 7, text: 'Which expression equals 2(x + 3)?',                options: ['2x + 6', '2x + 3', 'x + 6', '2x − 6'],  correct: 0 },
      { id: 8, text: 'If 3y = 21, then y = ?',                           options: ['7', '63', '18', '24'],   correct: 0 },
      { id: 9, text: 'What is the slope-intercept form of a linear eq?', options: ['y = mx + b', 'y = bx + m', 'ax + by = c', 'x = my + b'], correct: 0 },
      { id: 10, text: 'Simplify: 5x − 2x + 3',                          options: ['3x + 3', '7x + 3', '3x − 3', '5x + 1'], correct: 0 },
    ],
  },
  geometry: {
    subject: 'Mathematics',
    subjectId: 'math',
    topic: 'Geometry & Shapes',
    estMins: 4,
    questions: [
      { id: 1, text: 'What is the sum of interior angles of a triangle?', options: ['180°', '360°', '90°', '270°'],  correct: 0 },
      { id: 2, text: 'Area of a rectangle with length 8 and width 5?',    options: ['40', '26', '13', '80'],         correct: 0 },
      { id: 3, text: 'A square has side 6cm. What is its perimeter?',      options: ['24cm', '36cm', '12cm', '18cm'],correct: 0 },
      { id: 4, text: 'How many sides does a hexagon have?',                options: ['6', '5', '7', '8'],             correct: 0 },
      { id: 5, text: 'What type of angle is exactly 90°?',                 options: ['Right', 'Acute', 'Obtuse', 'Reflex'], correct: 0 },
      { id: 6, text: 'Circumference of circle with radius 7 (use π≈3.14)?',options: ['43.96', '49', '21.98', '153.86'], correct: 0 },
      { id: 7, text: 'What is a polygon with 4 equal sides called?',       options: ['Rhombus', 'Rectangle', 'Trapezium', 'Kite'], correct: 0 },
      { id: 8, text: 'Area of a triangle: base=10, height=6?',             options: ['30', '60', '16', '15'],         correct: 0 },
    ],
  },
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const QuizSession = () => {
  const navigate = useNavigate();
  const { subjectId = 'math', topicId = 'algebra' } = useParams();
  const quiz = quizData[topicId] ?? quizData.algebra;

  const [current,   setCurrent]   = useState(0);
  const [selected,  setSelected]  = useState(null);   // index of chosen option
  const [answers,   setAnswers]   = useState([]);      // { questionId, chosen, correct }
  const [showModal, setShowModal] = useState(false);
  const [elapsed,   setElapsed]   = useState(0);       // seconds

  // Timer
  useEffect(() => {
    if (showModal) return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [showModal]);

  const fmtTime = s => `${Math.floor(s / 60)}m ${s % 60}s`;

  const q = quiz.questions[current];
  const total = quiz.questions.length;

  const handleNext = useCallback(() => {
    if (selected === null) return;
    const record = { questionId: q.id, chosen: selected, correct: selected === q.correct };
    const updated = [...answers, record];
    setAnswers(updated);
    setSelected(null);

    if (current + 1 >= total) {
      setShowModal(true);
    } else {
      setCurrent(c => c + 1);
    }
  }, [selected, q, answers, current, total]);

  const correctCount   = answers.filter(a => a.correct).length;
  const incorrectCount = answers.filter(a => !a.correct).length;
  // include the last answer that triggered the modal
  const finalCorrect   = showModal
    ? answers.filter(a => a.correct).length
    : correctCount;
  const finalIncorrect = showModal
    ? answers.filter(a => !a.correct).length
    : incorrectCount;
  const scorePct = total > 0 ? Math.round((finalCorrect / total) * 100) : 0;

  const user = (() => { try { return JSON.parse(localStorage.getItem('user')) || {}; } catch { return {}; } })();
  const initials = user.naame ? user.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : 'CO';
  const progressPct = ((current) / total) * 100;

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <StudentSideNav />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Icon icon="mdi:magnify" width={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[12px] text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-200" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:bell-outline" width={18} className="text-gray-400" /></button>
            <button className="p-1.5 rounded-lg hover:bg-gray-50"><Icon icon="mdi:web" width={18} className="text-gray-400" /></button>
            <span className="text-[12px] text-gray-600 font-medium">English</span>
            <Icon icon="mdi:chevron-up" width={16} className="text-gray-400" />
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px] font-bold shrink-0">{initials}</div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-gray-800">{user.fullName || 'Chidi O.'}</p>
              <p className="text-[10px] text-gray-400">Student</p>
            </div>
            <Icon icon="mdi:chevron-down" width={15} className="text-gray-400" />
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">

          {/* Back */}
          <div className="w-full max-w-2xl mb-6">
            <button
              onClick={() => navigate(`/student-practice/${subjectId}/${topicId}`)}
              className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-teal-600 transition-colors font-medium"
            >
              <Icon icon="mdi:arrow-left" width={16} /> Back
            </button>
          </div>

          {/* Question card */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm w-full max-w-2xl px-8 py-8">

            {/* Progress row */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold text-teal-600 uppercase tracking-widest">
                Question {current + 1} of {total}
              </span>
              <span className="text-[11px] text-gray-400 font-medium">{quiz.subject}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-7">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Question text */}
            <h2 className="text-[20px] font-extrabold text-gray-900 text-center leading-tight mb-2 px-4">
              {q.text}
            </h2>
            <p className="text-[12px] text-gray-400 text-center mb-8">Select the correct option below.</p>

            {/* Options grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {q.options.map((opt, idx) => {
                const isSelected = selected === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl border-2 text-left transition-all duration-150
                      ${isSelected
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                      }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-extrabold shrink-0 transition-colors
                      ${isSelected ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {OPTION_LETTERS[idx]}
                    </span>
                    <span className={`text-[14px] font-semibold ${isSelected ? 'text-teal-700' : 'text-gray-800'}`}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                disabled={selected === null}
                className="bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white font-bold text-[13px] px-10 py-3 rounded-xl transition-colors"
              >
                {current + 1 === total ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>

          {/* Timer note */}
          <p className="mt-5 text-[11px] text-gray-400 flex items-center gap-1.5">
            <Icon icon="mdi:timer-outline" width={13} />
            Time elapsed: {fmtTime(elapsed)}
          </p>
        </main>

        {/* Fixed bottom Submit bar */}
        <div className="shrink-0 bg-white border-t border-gray-100 px-8 py-3 flex items-center justify-end">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-bold text-[13px] px-6 py-2.5 rounded-xl transition-colors"
          >
            Submit Answer <Icon icon="mdi:arrow-right" width={16} />
          </button>
        </div>
      </div>

      {/* Results modal */}
      {showModal && (
        <QuizResultsModal
          topic={quiz.topic}
          subject={quiz.subject}
          subjectId={subjectId}
          topicId={topicId}
          scorePct={scorePct}
          correct={finalCorrect}
          incorrect={finalIncorrect}
          elapsed={elapsed}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default QuizSession;