import React, { useState } from 'react';
import { 
  Type, AlignLeft, Paperclip, X, FileText, ArrowLeft, 
  CheckCircle2, ChevronRight, Search, Bell, Globe, 
  Layout, BookOpen, BarChart3, Settings, LogOut, 
  Pencil, Send, User, Clock
} from 'lucide-react';
import Button from '../../component/Button';

const UploadStep = ({ onBack, onNext }) => {
  const [showPreview, setShowPreview] = useState(false);
  const NavItem = ({ icon, label, active = false }) => (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-primary-50 text-primary-800' : 'text-neutral-2000 hover:bg-neutral-400'}`}>
      {icon}
      <span className="font-bold text-h5">{label}</span>
      {active && <div className="ml-auto w-1 h-5 bg-primary-800 rounded-full" />}
    </div>
  );

  const SummaryItem = ({ icon, label, value, bgColor }) => (
    <div className="flex items-center justify-between p-3 bg-neutral-100 rounded-lg border border-neutral-600">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${bgColor}`}>{icon}</div>
        <div>
          <p className="text-footer2 text-neutral-1000 font-medium uppercase tracking-tighter">{label}</p>
          <p className="text-h5 font-bold text-neutral-3000">{value}</p>
        </div>
      </div>
      <CheckCircle2 size={16} className="text-neutral-600" />
    </div>
  );

  // PREVIEW PAGE
  if (showPreview) {
    return (
      <div className="fixed inset-0 z-50 flex bg-neutral-300 font-secondary text-neutral-3000 animate-in fade-in duration-300">

        <aside className="w-64 bg-white border-r border-neutral-700 flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-2 text-primary-800">
              <div className="w-8 h-8 bg-primary-800 rounded-md flex items-center justify-center text-white"><BookOpen size={18} /></div>
              <div>
                <h1 className="font-bold text-h4 leading-none">Education Bridge</h1>
                <p className="text-footer2 text-neutral-1000">Teacher Portal</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1 mt-4">
            <NavItem icon={<FileText size={20}/>} label="Upload Resources" active />
            <NavItem icon={<Layout size={20}/>} label="Create Quiz" />
            <NavItem icon={<BarChart3 size={20}/>} label="Performance summary" />
            <div className="pt-8 pb-2 px-3 text-footer2 font-bold text-neutral-900 uppercase tracking-widest">System</div>
            <NavItem icon={<Settings size={20}/>} label="Settings" />
          </nav>
          <div className="p-4 border-t border-neutral-600">
            <button className="flex items-center gap-3 text-error-700 font-bold px-4 py-3 w-full hover:bg-error-50 rounded-lg transition-colors text-h5">
              <LogOut size={20} className="rotate-180" /> Sign Out
            </button>
          </div>
        </aside>

        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <header className="h-16 bg-white border-b border-neutral-700 px-8 flex items-center justify-between shrink-0">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-1000" size={18} />
              <input type="text" placeholder="Search" className="w-full bg-neutral-50 border border-neutral-700 rounded-full py-2 pl-10 text-p3 outline-none" />
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <Bell size={20} className="text-neutral-2000" />
                <span className="absolute -top-1 -right-1 bg-error-600 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">6</span>
              </div>
              <Globe size={20} className="text-neutral-2000" />
              <div className="flex items-center gap-3 border-l border-neutral-600 pl-5">
                <div className="text-right leading-tight">
                  <p className="text-h5 font-bold">Chidi O.</p>
                  <p className="text-footer2 text-neutral-1000">Teacher</p>
                </div>
                <div className="w-9 h-9 bg-secondary-700 rounded-full flex items-center justify-center text-white font-bold text-h5 relative">
                  CO
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 flex gap-8">
            <div className="flex-1 bg-white rounded-xl border border-neutral-700 overflow-hidden shadow-sm h-fit">
              <div className="bg-neutral-200 px-6 py-3 border-b border-neutral-700 flex justify-between items-center">
                <div className="flex items-center gap-2 text-neutral-2000 font-medium text-h6">
                  <Layout size={14} className="text-primary-800"/> Student View Preview
                </div>
                <span className="text-footer2 bg-neutral-600 px-2 py-1 rounded font-bold text-neutral-1000 uppercase">Tablet Mode</span>
              </div>
              <div className="p-10">
                <span className="bg-primary-50 text-primary-800 text-footer2 font-bold px-3 py-1 rounded uppercase">Mathematics</span>
                <h2 className="text-display3 font-bold text-neutral-3000 mt-4 mb-3 tracking-tight">Introduction to Quadratic Equations</h2>
                <div className="flex items-center gap-4 text-neutral-1000 text-p3 mb-8">
                  <span className="flex items-center gap-1.5"><User size={14}/> Mr. Adegoke</span>
                  <span className="flex items-center gap-1.5"><Clock size={14}/> 45 mins</span>
                </div>
                <div className="space-y-6 text-neutral-2000 text-p2 leading-relaxed">
                  <p>A quadratic equation is a polynomial equation of degree 2. The standard form of a quadratic equation is:</p>
                  <div className="bg-neutral-100 border-l-4 border-primary-800 p-8 rounded-r-lg font-mono text-p1 text-neutral-3000 flex justify-center">
                    ax² + bx + c = 0
                  </div>
                  <p className="text-p3">Where x represents an unknown, and a, b, and c represent known numbers, where a ≠ 0. If a = 0, then the equation is linear, not quadratic.</p>
                  
                  <div className="pt-4">
                    <h3 className="font-bold text-h4 mb-3">Key Concepts:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-p3">
                      <li>The graph of a quadratic function is a parabola.</li>
                      <li>The solutions to the quadratic equation are where the parabola crosses the x-axis.</li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-dotted border-neutral-600">
                    <p className="text-footer2 font-bold text-neutral-1000 uppercase mb-4">Downloadable Materials</p>
                    <div className="inline-flex items-center gap-3 p-3 border border-neutral-700 rounded-lg">
                      <div className="bg-error-50 p-2 rounded text-error-700"><FileText size={18}/></div>
                      <div>
                        <p className="text-footer1 font-bold">Practice_Set_1.pdf</p>
                        <p className="text-[10px] text-neutral-1000">1.2 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 flex flex-col gap-6 shrink-0">
              <div className="bg-white rounded-xl p-6 border border-neutral-700 shadow-sm">
                <h3 className="font-bold text-h4 mb-6 text-neutral-3000">Publishing Summary</h3>
                <div className="space-y-4">
                  <SummaryItem icon={<BookOpen size={18}/>} label="Target Class" value="SS2" bgColor="bg-primary-50 text-primary-800" />
                  <SummaryItem icon={<Layout size={18}/>} label="Subject" value="Mathematics" bgColor="bg-secondary-100 text-secondary-700" />
                  <SummaryItem icon={<Type size={18}/>} label="Topic Area" value="Algebra" bgColor="bg-neutral-500 text-neutral-2000" />
                </div>
                <label className="mt-8 flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 rounded border-neutral-800 text-primary-800" />
                  <p className="text-footer1 text-neutral-2000 leading-tight">Notify students immediately when they sync their devices.</p>
                </label>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  className="w-full !bg-primary-800 text-white !py-4 !rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <Send size={18} /> Save & Publish
                </Button>
                <button 
                  onClick={() => setShowPreview(false)} 
                  className="w-full bg-white border border-neutral-800 text-neutral-3000 py-4 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-neutral-50 transition-colors text-h5"
                >
                  <Pencil size={18} /> Edit Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //  UPLOAD FORM ---
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500 font-secondary">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-3">
          <span className="text-h5 font-bold text-primary-800 uppercase tracking-wide">Step 2: Upload Content</span>
          <span className="text-h5 font-medium text-neutral-900">2 of 3</span>
        </div>
        <div className="w-full h-1.5 bg-neutral-600 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-primary-800 rounded-full transition-all duration-500"></div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 bg-primary-50 text-primary-800 rounded-full flex items-center justify-center text-footer2 font-bold">1</div>
            <h2 className="text-h4 font-bold text-neutral-3000">Lesson Title</h2>
          </div>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-1000 group-focus-within:text-primary-800 transition-colors">
              <Type size={20} />
            </div>
            <input type="text" placeholder="e.g. Introduction to Quadratic Equations" className="w-full bg-white border border-neutral-700 rounded-xl py-4 pl-12 pr-4 text-p2 outline-none focus:border-primary-800 transition-all font-medium" />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 bg-primary-50 text-primary-800 rounded-full flex items-center justify-center text-footer2 font-bold">2</div>
            <h2 className="text-h4 font-bold text-neutral-3000">Lesson Content</h2>
          </div>
          <div className="border border-neutral-700 rounded-xl bg-white overflow-hidden focus-within:border-primary-800 transition-all">
            <div className="flex items-center gap-4 px-4 py-3 bg-neutral-200 border-b border-neutral-700">
              <button className="p-1.5 hover:bg-neutral-500 rounded text-neutral-2000 font-bold">B</button>
              <button className="p-1.5 hover:bg-neutral-500 rounded text-neutral-2000 italic">I</button>
              <button className="p-1.5 hover:bg-neutral-500 rounded text-neutral-2000 underline">U</button>
              <div className="h-4 w-[1px] bg-neutral-700 mx-1"></div>
              <AlignLeft size={18} className="text-neutral-2000 cursor-pointer" />
            </div>
            <textarea rows="10" placeholder="Type your lesson notes here..." className="w-full p-6 text-p2 outline-none resize-none placeholder:text-neutral-1000"></textarea>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 bg-primary-50 text-primary-800 rounded-full flex items-center justify-center text-footer2 font-bold">3</div>
            <h2 className="text-h4 font-bold text-neutral-3000">Attachments (Optional)</h2>
          </div>
          <div className="border-2 border-dashed border-neutral-800 rounded-2xl p-8 bg-neutral-200 flex flex-col items-center justify-center text-center hover:bg-primary-50 hover:border-primary-800 transition-all cursor-pointer group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <Paperclip className="text-primary-800" size={24} />
            </div>
            <p className="text-p3 font-bold text-neutral-3000">Click to upload or drag and drop</p>
            <p className="text-footer1 text-neutral-1000 mt-1">PDF, DOCX, or Images (Max 10MB)</p>
          </div>
        </section>
      </div>
      
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-500">
        <button onClick={onBack} className="flex items-center gap-2 text-neutral-2000 font-bold hover:text-primary-800 transition-colors uppercase text-[12px] tracking-wider">
          <ArrowLeft size={18} /> Back to Selection
        </button>
        <Button 
          variant="primary" 
          onClick={() => setShowPreview(true)}
          className="!bg-primary-800 hover:!bg-primary-900 !rounded-xl flex items-center gap-3 !px-12 !py-4 font-bold text-h5 text-white shadow-lg shadow-primary-800/20"
        >
          Review Content <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default UploadStep;