import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import StudentSideNav from './components/StudentSideNav';

// ─── Quiz Result Data ─────────────────────────────────────────────────────────
const strengths = [
  'Solving linear inequalities in one variable',
  'Graphing solutions on a number line',
];

const areasForImprovement = [
  'Word problems involving quadratic equations',
  'Factorization methods',
];

const questions = [
  {
    id: 1,
    status: 'missed',
    label: 'QUESTION 1',
    question: 'Solve for x: x² - 5x + 6 = 0',
    yourAnswer: 'x = 2, x = -3',
    correct: 'x = 2, x = 3',
    explanation:
      'To solve this quadratic equation, we need to find two numbers that multiply to +6 and add to -5. These numbers are -2 and -3.\n(x - 2)(x - 3) = 0  →  x = 2, x = 3',
  },
  {
    id: 2,
    status: 'correct',
    label: 'QUESTION 2',
    question: 'Which of the following represents a linear inequality?',
    yourAnswer: '2x + 3 > 7',
    correct: '2x + 3 > 7',
    explanation: null,
  },
  {
    id: 3,
    status: 'missed',
    label: 'QUESTION 1',
    question: 'Solve the linear equation for x: 5x - 7 = 13',
    yourAnswer: 'x = 1.2',
    correct: 'x = 4',
    explanation:
      '1. Move the constant: Add 7 to both sides. 5x - 7 + 7 = 13 + 7 becomes 5x = 20.\n2. Isolate x: Divide both sides by 5. 20 / 5 = 4.\nSo, x = 4. Remember, whatever you do to one side of the equals sign, you must do to the other!\n5x - 7 + 7 = 13 + 7 = 20 / 5 = 4, x = 4',
  },
  {
    id: 4,
    status: 'correct',
    label: 'QUESTION 2',
    question: 'Simplify the expression: 3(x + 4) - 2(x - 5)',
    yourAnswer: 'x + 22',
    correct: 'x + 22',
    explanation: null,
  },
];

// ─── Initial AI Messages ──────────────────────────────────────────────────────
const initialMessages = [
  {
    id: 1,
    role: 'ai',
    text: "Hi Chinedu! I noticed you struggled a bit with Factoring Quadratics.\nWould you like a quick trick to remember how to find the factors?",
  },
  {
    id: 2,
    role: 'user',
    text: 'Yes please! I keep mixing up the signs.',
  },
  {
    id: 3,
    role: 'ai',
    text: 'No problem! Think of the "X Game" method:',
    hasXGame: true,
  },
];

// ─── X Game Diagram ───────────────────────────────────────────────────────────
const XGameDiagram = () => (
  <div className="mt-2 bg-white border border-gray-200 rounded-xl p-3 w-[160px]">
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[10px] font-bold text-gray-500">Product</span>
      <span className="text-[11px] font-bold text-teal-700">(ac)</span>
      <div className="w-full flex items-center justify-center my-1">
        <svg width="60" height="40" viewBox="0 0 60 40">
          <line x1="5" y1="5" x2="55" y2="35" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="55" y1="5" x2="5" y2="35" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-[11px] font-bold text-teal-700">Sum (b)</span>
      <span className="text-[10px] font-bold text-gray-500">Sum</span>
    </div>
    <p className="text-[10px] text-gray-500 text-center mt-1.5 leading-relaxed">
      Top is product, bottom is sum. The sides are your factors!
    </p>
  </div>
);

// ─── Question Card ────────────────────────────────────────────────────────────
const QuestionCard = ({ q }) => {
  const missed = q.status === 'missed';

  return (
    <div className={`rounded-xl border ${missed ? 'border-red-100' : 'border-green-100'} overflow-hidden`}>
      <div className="px-5 py-3 flex items-center justify-between bg-white">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{q.label}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${missed ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
              {missed ? 'Missed' : 'Correct'}
            </span>
          </div>
          <p className="text-[13px] font-semibold text-gray-800">{q.question}</p>
        </div>
      </div>

      <div className="px-5 pb-3 flex items-center gap-3 flex-wrap">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium ${missed ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
          <span>Your Answer: {q.yourAnswer}</span>
          <Icon icon={missed ? 'mdi:close' : 'mdi:check'} width={13} />
        </div>
        {missed && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium bg-green-50 text-green-600">
            <span>Correct: {q.correct}</span>
            <Icon icon="mdi:check" width={13} />
          </div>
        )}
      </div>

      {missed && q.explanation && (
        <div className="mx-5 mb-4 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Icon icon="mdi:information-outline" width={13} className="text-teal-600" />
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">Explanation</span>
          </div>
          {q.explanation.split('\n').map((line, i) => (
            <p key={i} className="text-[11px] text-gray-700 leading-relaxed">{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const AiTutor = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'ai',
        text: `Great question! Let me explain that clearly. In the context of Linear Inequalities, "${trimmed}" relates to how we handle the inequality sign when performing operations on both sides.`,
      }]);
    }, 1400);
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">

      {/* ── Sidebar ── */}
      <StudentSideNav />

      {/* ── Main column ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ── Top Bar ── */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 shrink-0">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-64">
            <Icon icon="mdi:magnify" width={14} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[12px] text-gray-600 outline-none placeholder-gray-400 w-full"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
              <Icon icon="mdi:bell-outline" width={18} className="text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
            <button className="flex items-center gap-1 text-[12px] font-medium text-gray-600 hover:text-gray-800 transition-colors">
              <Icon icon="mdi:web" width={15} />
              English
              <Icon icon="mdi:chevron-down" width={13} />
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-[11px] font-bold shrink-0 cursor-pointer">
                CO
              </div>
              <div className="leading-tight">
                <p className="text-[12px] font-semibold text-gray-800">Chidi O.</p>
                <p className="text-[10px] text-gray-400">Student</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Back button — above both panels ── */}
        <div className="px-6 pt-4 pb-2 bg-[#f8f9fc]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800 transition-colors"
          >
            <Icon icon="mdi:arrow-left" width={15} />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* ── Left + Right panels side by side ── */}
        <div className="flex-1 flex overflow-hidden">

          {/* ── LEFT: Quiz Results ── */}
          <div className="flex-1 overflow-y-auto px-6 py-4">

            {/* Score hero */}
            <div className="flex items-start gap-6 mb-6">
              {/* Outer square card */}
              <div className="w-[100px] h-[100px] shrink-0 rounded-2xl bg-teal-600 flex flex-col items-center justify-center">
                <div className="w-[72px] h-[72px] rounded-full bg-white-400 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-black text-white leading-none">80%</span>
                  <span className="text-[9px] font-semibold text-white/80 mt-0.5">SCORE</span>
                </div>
              </div>
              {/* Text */}
              <div className="flex-1">
                <h1 className="text-[20px] font-black text-gray-800 mb-1">Great job, Chinedu!</h1>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                  You've mastered <span className="font-semibold text-teal-700">Linear Inequalities</span>. A bit more practice on Quadratic Equations and you'll be set for the term exam.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-[12px] text-green-600 font-semibold">
                    <Icon icon="mdi:check-circle-outline" width={15} />
                    15 Correct
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-red-500 font-semibold">
                    <Icon icon="mdi:close-circle-outline" width={15} />
                    5 Incorrect
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-500 font-semibold">
                    <Icon icon="mdi:clock-outline" width={15} />
                    12m 30s
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths + Areas for Improvement */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-100 rounded-xl px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon="mdi:trending-up" width={15} className="text-teal-600" />
                  <p className="text-[13px] font-bold text-teal-700">Strengths</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon="mdi:trending-up" width={15} className="text-orange-500" />
                  <p className="text-[13px] font-bold text-orange-600">Areas for Improvement</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {areasForImprovement.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Question Review */}
            <div>
              <h2 className="text-[15px] font-bold text-gray-800 mb-4">Question Review</h2>
              <div className="flex flex-col gap-4">
                {questions.map(q => <QuestionCard key={q.id} q={q} />)}
              </div>
            </div>

          </div>
          {/* ── end LEFT ── */}

          {/* ── RIGHT: AI Tutor Panel ── */}
          <div className="w-[320px] shrink-0 border-l border-gray-100 bg-white flex flex-col overflow-hidden">

            {/* AI Header */}
            <div className="bg-blue-600 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon icon="mdi:robot-happy-outline" width={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">AI Tutor</p>
                  <p className="text-[10px] text-teal-100">Always here to help</p>
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                <Icon icon="mdi:dots-vertical" width={16} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 bg-white">
              {messages.map(msg => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mb-1">
                      <Icon icon="mdi:robot-happy-outline" width={13} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed
                      ${msg.role === 'ai'
                        ? 'bg-gray-100 text-gray-700 rounded-bl-sm'
                        : 'bg-teal-600 text-white rounded-br-sm'}`}>
                      {msg.text}
                      {msg.hasXGame && <XGameDiagram />}
                    </div>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center shrink-0 mb-1 text-white text-[10px] font-bold">
                      CH
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <Icon icon="mdi:robot-happy-outline" width={13} className="text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-100 bg-white shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send(input)}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent text-[12px] text-gray-700 placeholder-gray-400 outline-none"
                />
                <button
                  onClick={() => send(input)}
                  className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors shrink-0"
                >
                  <Icon icon="mdi:send" width={13} className="text-white" />
                </button>
              </div>
            </div>

            {/* Recommended Next Step */}
            <div className="px-4 pb-4 pt-3 bg-white shrink-0 border-t border-gray-100">
              <p className="text-[11px] font-bold text-teal-500 mb-3">
                Recommended Next Step
              </p>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border-2 border-teal-500 text-[12px] font-semibold text-teal-600 hover:bg-teal-50 transition-colors mb-2">
                <Icon icon="mdi:refresh" width={14} />
                Retake Quiz
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-700 text-white text-[12px] font-semibold hover:bg-teal-800 transition-colors">
                Next Lesson: Linear Inequalities
                <Icon icon="mdi:arrow-right" width={14} />
              </button>
            </div>

          </div>
          {/* ── end RIGHT ── */}

        </div>
        {/* ── end panels row ── */}

      </div>
      {/* ── end main column ── */}

    </div>
  );
};

export default AiTutor;