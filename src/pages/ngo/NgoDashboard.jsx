import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut } from 'lucide-react';

const NgoDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-[#0D685E]" size={24} />
            <h1 className="text-2xl font-bold text-[#0D685E]">NGO Dashboard</h1>
          </div>
          <button onClick={() => navigate('/login')} className="flex items-center gap-1 text-red-500 hover:underline">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
        <p className="text-gray-600">Welcome, Partner! Your reports and analytics will appear here.</p>
      </div>
    </div>
  );
};
export default NgoDashboard;