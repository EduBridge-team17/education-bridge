import React from 'react';
import { 
  BookText, FlaskConical, GraduationCap, Calculator, 
  Book, Zap, Leaf, LineChart, Globe2, Users2, History, ArrowRight 
} from 'lucide-react';
import Button from '../../component/Button';

const SelectionStep = ({ selectedLevel, setSelectedLevel, selectedSubject, setSelectedSubject, onNext }) => {
  
  const levels = [
    { id: 'SS 1', name: 'SS 1', sub: 'Senior Secondary 1', icon: <BookText className="text-blue-500" size={36} />, bg: 'bg-blue-50' },
    { id: 'SS 2', name: 'SS 2', sub: 'Senior Secondary 2', icon: <FlaskConical className="text-success-500" size={36} />, bg: 'bg-success-50' },
    { id: 'SS 3', name: 'SS 3', sub: 'Senior Secondary 3', icon: <GraduationCap className="text-secondary-700" size={36} />, bg: 'bg-secondary-100' },
  ];

  const subjects = [
    { name: 'Mathematics', icon: <Calculator size={20} className="text-blue-500" /> },
    { name: 'English', icon: <Book size={20} className="text-error-500" /> },
    { name: 'Physics', icon: <Zap size={20} className="text-purple-400" /> },
    { name: 'Chemistry', icon: <FlaskConical size={20} className="text-success-500" /> },
    { name: 'Biology', icon: <Leaf size={20} className="text-success-600" /> },
    { name: 'Economics', icon: <LineChart size={20} className="text-secondary-600" /> },
    { name: 'Geography', icon: <Globe2 size={20} className="text-secondary-700" /> },
    { name: 'Civics', icon: <Users2 size={20} className="text-indigo-600" /> },
    { name: 'Agric Sci.', icon: <Leaf size={20} className="text-lime-600" /> },
    { name: 'Literature', icon: <History size={20} className="text-pink-500" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 font-secondary">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-3">
          <span className="text-h5 font-bold text-primary-800">Step 1: Selection</span>
          <span className="text-h5 font-medium text-neutral-900">1 of 3</span>
        </div>
        <div className="w-full h-1.5 bg-neutral-600 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-primary-800 rounded-full transition-all duration-500"></div>
        </div>
      </div>


      <section className="mb-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-7 bg-primary-50 text-primary-800 rounded-full flex items-center justify-center text-footer2 font-bold">1</div>
          <h2 className="text-h4 font-bold text-neutral-3000">Select Class Level</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {levels.map((lvl) => (
            <div 
              key={lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
              className={`p-10 rounded-xl border-2 transition-all cursor-pointer text-center flex flex-col items-center gap-6 shadow-sm hover:shadow-md ${
                selectedLevel === lvl.id 
                  ? 'border-primary-800 bg-white ring-2 ring-primary-800/5' 
                  : 'border-neutral-500 bg-neutral-50'
              }`}
            >
              <div className={`p-6 rounded-lg ${lvl.bg}`}>
                {lvl.icon}
              </div>
              <div>
                <p className="text-h1 font-black text-neutral-3000 tracking-tight">{lvl.id}</p>
                <p className="text-footer2 text-neutral-1000 font-medium uppercase tracking-widest mt-1">{lvl.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-7 bg-primary-50 text-primary-800 rounded-full flex items-center justify-center text-footer2 font-bold">2</div>
          <h2 className="text-h4 font-bold text-neutral-3000">Select Subject</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {subjects.map((sub) => (
            <div 
              key={sub.name}
              onClick={() => setSelectedSubject(sub.name)}
              className={`p-6 rounded-lg border flex flex-col items-center gap-4 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                selectedSubject === sub.name 
                  ? 'border-primary-800 bg-primary-50' 
                  : 'border-neutral-400 bg-neutral-50'
              }`}
            >
              <div className="w-12 h-12 bg-neutral-400 rounded-md flex items-center justify-center">
                {sub.icon}
              </div>
              <span className="text-h6 font-semibold text-neutral-2000">{sub.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end mt-16">
        <Button 
          variant="primary" 
          onClick={onNext}
          className="!bg-primary-800 hover:!bg-primary-900 !rounded-lg flex items-center gap-3 !px-12 !py-4 font-bold text-h5 shadow-lg shadow-primary-800/20"
        >
          Next Step <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default SelectionStep;