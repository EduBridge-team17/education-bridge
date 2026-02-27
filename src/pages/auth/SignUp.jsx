import React, { useState } from 'react';
import { User, Smartphone, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import Button from '../../component/Button';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); 
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    identifier: '', 
    password: '',
    schoolName: '',
    roleTitle: '',
    subjectsTaught: '',
    schoolEmail: '',
    teachingLevel: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }
    setIsLoading(true);

    const payload = {
      role: role,
      name: formData.fullName,
      password: formData.password,
      ...(role === 'student' 
        ? { email: formData.identifier } 
        : { 
            email: formData.schoolEmail, 
            school: formData.schoolName,
            role_title: formData.roleTitle,
            subjects: formData.subjectsTaught,
            level: formData.teachingLevel
          })
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Account created! Redirecting to login...");
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Server error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen w-full bg-neutral-100 flex items-center justify-center p-4 font-secondary'>
      <div className='w-full max-w-[850px] flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200'>
      
        <div className='hidden lg:flex lg:w-[50%] bg-primary-800 p-8 flex-col justify-between relative overflow-hidden'>
          <div className='z-10'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='bg-neutral-400 p-1 rounded-full'>
                <GraduationCap className='text-primary-900' size={14} />
              </div>
              <span className='text-white font-bold text-[12px]'>Education Bridge</span>
            </div>
            <h1 className='text-h1 font-bold text-white leading-tight mb-3'>
              Empowering Rural Education Across Nigeria.
            </h1>
            <p className='text-p3 text-neutral-800 max-w-[240px] leading-relaxed opacity-90'>
              Join thousands of SS1-SS3 students and teachers bridging the digital divide with offline-first learning tools.
            </p>
          </div>
          <div className='z-10 pt-10'>
            <div className='flex -space-x-2 mb-2'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='w-10 h-10 rounded-full border-2 border-primary-800 bg-neutral-600' />
              ))}
              <div className='w-10 h-10 rounded-full border-2 border-primary-800 bg-white flex items-center justify-center text-[8px] font-bold text-primary-900'>+2k</div>
            </div>
            <p className='text-[10px] text-neutral-800'>Trusted by over 2,000 schools in rural communities.</p>
          </div>
        </div>

        <div className='flex-1 lg:w-[45%] flex flex-col justify-center p-6 lg:p-8 bg-white'>
          <h2 className='text-h3 font-bold text-primary-900 mb-0.5'>Create Account</h2>
          <p className='text-sm text-neutral-3000 mb-4'>Start your learning journey today.</p>

          <div className='flex bg-neutral-400 p-0.5 rounded-lg mb-5'>
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-[12px] transition-all rounded-md ${role === 'student' ? 'bg-white shadow-sm font-bold text-primary-900' : 'text-neutral-1000'}`}
            >
              <User size={12} /> Student
            </button>
            <button
              type="button"
              onClick={() => setRole('teacher')}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-[12px] transition-all rounded-md ${role === 'teacher' ? 'bg-white shadow-sm font-bold text-primary-900' : 'text-neutral-1000'}`}
            >
              <GraduationCap size={12} /> Teacher
            </button>
          </div>

          <form className='space-y-3' onSubmit={handleSignUp}>
            <div>
              <label className='block text-[12px] font-bold text-primary-900 mb-0.5'>Full Name</label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                <input type='text' name="fullName" required onChange={handleChange} placeholder='e.g. Chinedu Okafor' className='w-full pl-9 pr-4 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
              </div>
            </div>

            {role === 'student' ? (
              <div>
                <label className='block text-[12px] font-bold text-primary-900 mb-0.5'>Phone Number or Email</label>
                <div className='relative'>
                  <Smartphone className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                  <input type='text' name="identifier" required onChange={handleChange} placeholder='+234 80...' className='w-full pl-9 pr-4 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className='block text-[12px] font-bold text-primary-900 mb-0.5'>School Name</label>
                  <div className='relative'>
                    <Smartphone className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                    <input type='text' name="schoolName" required onChange={handleChange} className='w-full pl-9 pr-4 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <label className='block text-[12px] font-bold text-primary-900'>Role</label>
                    <input type='text' name="roleTitle" placeholder="Role" onChange={handleChange} className='w-full px-3 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                  </div>
                  <div>
                    <label className='block text-[12px] font-bold text-primary-900'>Subject</label>
                    <input type='text' name="subjectsTaught" placeholder="Subjects" onChange={handleChange} className='w-full px-3 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <label className='block text-[12px] font-bold text-primary-900'>School Email</label>
                    <input type='email' name="schoolEmail" placeholder="Email" required onChange={handleChange} className='w-full px-3 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                  </div>
                  <div>
                    <label className='block text-[12px] font-bold text-primary-900'>Level</label>
                    <input type='text' name="teachingLevel" placeholder="Level" onChange={handleChange} className='w-full px-3 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className='block text-[12px] font-bold text-primary-900 mb-0.5'>Password</label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                <input type={showPassword ? 'text' : 'password'} name="password" required onChange={handleChange} placeholder='........' className='w-full pl-9 pr-9 py-1.5 bg-neutral-300 border-none rounded-md outline-none text-[11px]' />
                <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-60' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </div>
              </div>
            </div>

            <div className='flex items-center gap-2 pt-1'>
              <input type='checkbox' name="agreeToTerms" required onChange={handleChange} className='w-3 h-3 accent-primary-800' />
              <p className='text-[9px] text-neutral-3000'>
                I agree to the <span className='text-primary-800 underline font-medium'>Terms</span> and <span className='text-primary-800 underline font-medium'>Privacy Policy</span>
              </p>
            </div>

            <Button type="submit" disabled={isLoading} className='w-full bg-[#116962] text-white py-2 rounded-lg font-bold text-[12px] shadow-sm mt-1'>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

            <p className='text-center text-[10px] text-neutral-3000 mt-2'>
              Already have an account? <span onClick={() => navigate('/login')} className='text-primary-800 font-bold cursor-pointer hover:underline'>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;