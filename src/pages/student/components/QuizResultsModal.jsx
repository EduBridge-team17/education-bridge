import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ScoreRing = ({ pct }) => {
  const r    = 54;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  const passLabel =
    pct >= 80 ? '+High Pass' :
    pct >= 60 ? '+Pass'      :
    pct >= 40 ? 'Average'    : 'Keep Trying';

    
  const ringColor =
    pct >= 80 ? '#f59e0b' :
    pct >= 60 ? '#14b8a6' :
    pct >= 40 ? '#3b82f6' : '#f87171';

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* Track */}
        <circle cx="70" cy="70" r={r} fill="none" stroke="#f3f4f6" strokeWidth="10" />
        {/* Progress */}
        <circle cx="70" cy="70" r={r} fill="none" stroke={ringColor} strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`} strokeDashoffset={circ * 0.25}
          strokeLinecap="round" transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
        <text x="70" y="64" textAnchor="middle" fontSize="26" fontWeight="800" fill="#111827">
          {pct}%
        </text>
        <text x="70" y="82" textAnchor="middle" fontSize="10" fontWeight="600" fill={ringColor}>
          {passLabel}
        </text>
      </svg>
    </div>
  );
};


const QuizResultsModal = ({
  topic, subject, subjectId, topicId,
  scorePct, correct, incorrect, elapsed,
  onClose,
}) => {
  const navigate  = useNavigate();
  const overlayRef = useRef(null);

  // Close on outside click
  const handleOverlay = e => { if (e.target === overlayRef.current) onClose(); };

  // Format elapsed
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const fmtElapsed = `${mins}m ${secs}s`;

  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const passLabel =
    scorePct >= 80 ? 'Great Effort!'  :
    scorePct >= 60 ? 'Well Done!'     :
    scorePct >= 40 ? 'Keep Going!'    : 'Keep Practising!';

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
      style={{ animation: 'fadeIn 0.2s ease' }}
    >
      <style>{`
        @keyframes fadeIn   { from { opacity: 0; }              to { opacity: 1; } }
        @keyframes slideUp  { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden"
        style={{ animation: 'slideUp 0.3s ease' }}
      >
        {/* Close */}
        <div className="flex justify-end px-5 pt-5 pb-0">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <Icon icon="mdi:close" width={20} />
          </button>
        </div>

        <div className="flex gap-0">
          {/* ── Left: score ── */}
          <div className="flex-1 px-8 pb-8 flex flex-col items-center text-center border-r border-gray-100">
            <h2 className="text-[22px] font-extrabold text-gray-900 mb-1">{passLabel}</h2>
            <p className="text-[12px] text-gray-400 mb-6">
              You've completed the {subject}: {topic} module.
            </p>

            <ScoreRing pct={scorePct} />

            <div className="flex items-center gap-4 mt-4 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <Icon icon="mdi:timer-outline" width={13} />{fmtElapsed}
              </span>
              <span className="text-gray-200">|</span>
              <span className="flex items-center gap-1">
                <Icon icon="mdi:calendar-outline" width={13} />{today}
              </span>
            </div>
          </div>

          {/* ── Right: breakdown + actions ── */}
          <div className="flex-1 px-8 pb-8 pt-4 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <Icon icon="ic:baseline-library-books" width={16} className="text-teal-500" />
              <p className="text-[13px] font-bold text-gray-900">Session Breakdown</p>
            </div>

            {/* Correct */}
            <div className="flex items-center gap-3 py-3 border-b border-gray-50">
              <div className="w-9 h-9 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center shrink-0">
                <Icon icon="mdi:check" width={16} className="text-green-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Correct</p>
                <p className="text-[22px] font-extrabold text-gray-900 leading-none">{correct}</p>
              </div>
            </div>

            {/* Incorrect */}
            <div className="flex items-center gap-3 py-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center shrink-0">
                <Icon icon="mdi:close" width={16} className="text-red-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Incorrect</p>
                <p className="text-[22px] font-extrabold text-gray-900 leading-none">{incorrect}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 mt-auto">
              <button
                onClick={() => navigate(`/student-quiz-session/${subjectId}/${topicId}`)}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[12px] py-2.5 rounded-xl transition-colors"
              >
                <Icon icon="mdi:robot-outline" width={15} />
                Review Answers & AI Feedback
              </button>
              <button
                onClick={() => navigate(`/student-subject/${subjectId}`)}
                className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-[12px] py-2.5 rounded-xl transition-colors"
              >
                Finish Subject <Icon icon="mdi:arrow-right" width={15} />
              </button>
            </div>

            {/* Report link */}
            <button className="mt-3 text-[10px] text-gray-400 hover:text-red-400 transition-colors text-center w-full">
              ⚑ Report an issue with this question set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;