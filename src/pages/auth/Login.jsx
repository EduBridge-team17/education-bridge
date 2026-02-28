import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, GraduationCap, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button';
import SuccessModal from '../../component/Modal';

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Optionally save token or user info
        localStorage.setItem('token', data.token);
        setIsSuccessOpen(true);
      } else {
        setErrorMessage(data.message || 'Invalid credentials');
      }

    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage('Something went wrong. Please try again.');
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
              Join thousands of SS1-SS3 students and teachers bridging the digital divide.
            </p>
          </div>

          <div className='z-10 pt-10'>
            <div className='flex -space-x-2 mb-2'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='w-10 h-10 rounded-full border-2 border-primary-800 bg-neutral-600' />
              ))}
              <div className='w-10 h-10 rounded-full border-2 border-primary-800 bg-white flex items-center justify-center text-[8px] font-bold text-primary-900'>
                +2k
              </div>
            </div>
            <p className='text-[10px] text-neutral-800'>Trusted by over 2,000 schools in rural communities.</p>
          </div>
        </div>

       
        <div className='flex-1 lg:w-[45%] flex flex-col justify-center p-6 lg:p-8 bg-white'>
          <div className='w-full'>
            <h2 className='text-h3 font-bold text-primary-900 mb-0.5'>Welcome Back</h2>
            <p className='text-sm text-neutral-3000 mb-6'>Start your learning journey today.</p>

            <form className='space-y-4' onSubmit={handleLogin}>
              <div>
                <label className='block text-[12px] font-bold text-primary-900 mb-1'> Email Address</label>
                <div className='relative'>
                  <Smartphone className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                  <input
                    type='email'
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder='you@example.com'
                    className='w-full pl-9 pr-4 py-2 bg-neutral-300 border-none rounded-md outline-none text-[11px] focus:ring-1 focus:ring-primary-800'
                  />
                </div>
              </div>

              <div>
                <label className='block text-[12px] font-bold text-primary-900 mb-1'>Password</label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={14} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    onChange={handleChange}
                    placeholder='........'
                    className='w-full pl-9 pr-9 py-2 bg-neutral-300 border-none rounded-md outline-none text-[11px] focus:ring-1 focus:ring-primary-800'
                  />
                  <div 
                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-60' 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </div>
                </div>
                <p className='text-[9px] text-neutral-3000 mt-1'>Must be at least 8 characters.</p>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className='w-full bg-[#116962] text-white py-2.5 rounded-lg font-bold text-[12px] shadow-sm mt-4'
              >
                {isLoading ? 'Verifying...' : 'Log in →'}
    
              </Button>

              <p className='text-center text-[10px] text-neutral-3000 mt-4'>
                Already have an account? <span 
                  onClick={() => navigate('/signup')} 
                  className='text-primary-800 font-bold cursor-pointer hover:underline'
                >Sign up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
