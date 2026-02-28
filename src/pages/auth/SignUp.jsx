import React, { useState } from 'react';
import { User, Mail, Smartphone, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../component/Modal';
import Button from '../../component/Button';

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://edu-bridge-backend-z68e.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessOpen(true);
      }

    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-neutral-100 flex items-center justify-center p-4 font-secondary'>
        <div className='w-full max-w-[850px] flex bg-white rounded-2xl shadow-2xl overflow-hidden'>

          <div className='hidden lg:flex w-1/2 bg-[#1F7A6B] p-10 flex-col justify-between text-white'>
            <div>
              <div className='flex items-center gap-2 mb-6'>
                <div className='bg-neutral-400 p-1 rounded-full'>
                  <GraduationCap className='text-primary-900' size={14} />
               </div>
                <span className='font-bold'>Education Bridge</span>
              </div>

              <h1 className='text-3xl font-bold leading-snug mb-4'>
                Empowering Rural Education Across Nigeria.
              </h1>

              <p className='text-sm opacity-90 max-w-[260px]'>
                Join thousands of SS1-SS3 students and teachers bridging the digital divide with offline-first learning tools.
              </p>
            </div>

            <div>
              <div className='flex -space-x-2 mb-3'>
                {[1, 2, 3].map(i => (
                  <div key={i} className='w-10 h-10 rounded-full bg-white border-2 border-prmary-600' />
                ))}
                <div className='w-10 h-10 rounded-full bg-white text-primary-600 flex items-center justify-center text-xs font-bold'>
                  +2k
                </div>
              </div>
              <p className='text-xs opacity-80'>
                Trusted by over 2,000 schools in rural communities.
              </p>
            </div>
          </div>

          <div className='flex-1 p-8'>
            <h2 className='text-2xl font-bold text-gray-800'>Create account</h2>
            <p className='text-sm text-gray-500 mb-6'>Choose your role to continue</p>

            <form onSubmit={handleSignUp} className='space-y-4'>

              <div>
                <label className='text-sm font-medium'>I am signing up as</label>
                <select
                  name="role"
                  required
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]'
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>

              <div className='relative'>
                <User size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  onChange={handleChange}
                  className='w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]'
                />
              </div>

              <div className='relative'>
                <Mail size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  onChange={handleChange}
                  className='w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]'
                />
              </div>

              <div className='relative'>
                <Smartphone size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input
                  type="text"
                  name="phone"
                  placeholder="+234 80..."
                  onChange={handleChange}
                  className='w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]'
                />
              </div>

              <div className='relative'>
                <Lock size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="********"
                  onChange={handleChange}
                  className='w-full pl-10 pr-10 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]'
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400'
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className='w-full bg-[#1F7A6B] text-white py-3 rounded-lg font-semibold'
              >
                {isLoading ? 'Creating Account...' : 'Create Account →'}
              </Button>

              <div className='flex items-center gap-3 text-xs text-gray-400'>
                <div className='flex-1 h-px bg-gray-200'></div>
                OR CONTINUE WITH EMAIL
                <div className='flex-1 h-px bg-gray-200'></div>
              </div>

        
              <button
                type="button"
                className='w-full border py-3 rounded-lg text-sm font-medium hover:bg-gray-50'
              >
                Continue with Google
              </button>

              <p className='text-center text-sm text-gray-500'>
                Already have an account?
                <span
                  onClick={() => navigate('/login')}
                  className='text-[#1F7A6B] font-semibold cursor-pointer ml-1'
                >
                  Log in
                </span>
              </p>

            </form>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Account Created Successfully!"
        message="Your account has been created successfully. You can now log in."
        buttonText="Continue to Login"
        onConfirm={() => navigate('/login')}
      />
    </>
  );
};

export default SignUp;