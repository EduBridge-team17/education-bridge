import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const initialMessages = [
  {
    id: 1,
    role: 'ai',
    text: "Hello, JD! I see you're studying Linear Equations. I can help you understand slope calculation or check your work. What would you like to do?",
    time: 'Today, 2:34 PM',
  },
];

const quickActions = ['Show me a graph example', 'Quiz me on this', 'Explain again'];

const AIChatModal = ({ isOpen, onClose, lessonTitle = 'Linear Equations' }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulate AI reply after short delay
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: 'ai',
        text: `Great question! Let me help you understand "${text}" in the context of ${lessonTitle}.`,
        time: 'Just now',
      };
      setMessages(prev => [...prev, reply]);
      setLoading(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[360px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100 animate-slide-in">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center">
              <Icon icon="mdi:robot-outline" width={20} className="text-white" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-gray-900">AI Study Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                <span className="text-[10px] text-green-600 font-medium">Online · Ready to help</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <Icon icon="mdi:close" width={18} className="text-gray-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                {msg.role === 'ai' && (
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mb-0.5">
                    <Icon icon="mdi:robot-outline" width={13} className="text-white" />
                  </div>
                )}
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed
                    ${msg.role === 'ai'
                      ? 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-none'
                      : 'bg-teal-600 text-white rounded-tr-none'
                    }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick actions */}
        <div className="px-4 pb-2 flex gap-2 flex-wrap">
          {quickActions.map(action => (
            <button
              key={action}
              onClick={() => send(action)}
              className="text-[11px] text-teal-600 border border-teal-200 bg-teal-50 px-3 py-1 rounded-full hover:bg-teal-100 transition-colors font-medium"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => send(input)}
              className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors shrink-0"
            >
              <Icon icon="mdi:send" width={13} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.25s ease-out forwards; }
      `}</style>
    </>
  );
};

export default AIChatModal;