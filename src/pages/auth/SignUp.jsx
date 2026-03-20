import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, GraduationCap, Smartphone, Info } from 'lucide-react';
// import { supabase } from '../../supabaseClient.js';
import SuccessModal from '../../component/Modal';
import Button from '../../component/Button';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    role: '',
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Create user in Supabase Auth – trigger will copy to public.users
      // const { data, error } = await supabase.auth.signUp({
      //   email: formData.email,
      //   password: formData.password,
      //   options: {
      //     data: {
      //       name: formData.fullName,
      //       role: formData.role,
      //       phone: formData.phone,
      //       language: 'en',        // default language
      //       status: 'active'        // account status
      //     }
      //   }
      // });

      if (error) throw error;

      // No manual insert – the database trigger handles it
      setIsSuccessOpen(true);
    } catch (err) {
      setErrorMessage(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='min-h-screen w-full bg-neutral-100 flex flex-col items-center justify-center p-4 font-secondary'>
        {/* Main card */}
        <div className='w-full max-w-[1000px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200'>
          <div className='flex flex-col lg:flex-row'>
            {/* Left side - Branding (identical to Login) */}
            <div className='lg:w-1/2 bg-primary-800 p-8 flex flex-col justify-between relative overflow-hidden'>
              <div>
                <div className='flex items-center gap-2 mb-6'>
                  <div className='bg-neutral-400 p-1 rounded-full'>
                    <GraduationCap className='text-primary-900' size={14} />
                  </div>
                  <span className='text-white font-bold text-sm'>Education Bridge</span>
                </div>
                <h1 className='text-3xl font-bold text-white leading-tight mb-3'>
                  Empowering Rural Education Across Nigeria.
                </h1>
                <p className='text-neutral-200 text-sm max-w-xs leading-relaxed'>
                  Join thousands of SS1-SS3 students and teachers bridging the digital divide with offline-first learning tools.
                </p>
              </div>

              {/* Faces + Trusted text */}
              <div className='mt-10'>
                <div className='flex -space-x-2 mb-2'>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className='w-10 h-10 rounded-full border-2 border-primary-800 bg-neutral-600' />
                  ))}
                  <div className='w-10 h-10 rounded-full border-2 border-primary-800 bg-white flex items-center justify-center text-xs font-bold text-primary-900'>
                    +2k
                  </div>
                </div>
                <p className='text-xs text-neutral-200'>Trusted by over 2,000 schools in rural communities.</p>
              </div>
            </div>

            {/* Right side - Signup form */}
            <div className='lg:w-1/2 p-8 bg-white'>
              <h2 className='text-2xl font-bold text-primary-900 mb-1'>Create account</h2>
              <p className='text-sm text-neutral-800 mb-4'>Start your learning journey today.</p>

              {/* Role dropdown */}
              <select
                name='role'
                value={formData.role}
                onChange={handleChange}
                required
                className='w-full mb-4 p-2.5 border border-neutral-700 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary-800'
              >
                <option value='' disabled>Select Role</option>
                <option value='student'>Student</option>
                <option value='teacher'>Teacher</option>
                <option value='ngo'>NGO / Partner</option>
              </select>

              {errorMessage && (
                <div className='mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md'>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSignUp} className='space-y-4'>
                {/* Full Name */}
                <div>
                  <label className='block text-xs font-semibold text-primary-900 mb-1'>Full Name</label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={16} />
                    <input
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder='Chidi Okenwa'
                      className='w-full pl-10 pr-4 py-2.5 bg-neutral-100 border border-neutral-700 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-primary-800'
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className='block text-xs font-semibold text-primary-900 mb-1'>Email Address</label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={16} />
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder='you@example.com'
                      className='w-full pl-10 pr-4 py-2.5 bg-neutral-100 border border-neutral-700 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-primary-800'
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className='block text-xs font-semibold text-primary-900 mb-1'>Phone Number</label>
                  <div className='relative'>
                    <Smartphone className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={16} />
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder='+234 802 127 9206'
                      className='w-full pl-10 pr-4 py-2.5 bg-neutral-100 border border-neutral-700 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-primary-800'
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className='block text-xs font-semibold text-primary-900 mb-1'>Password</label>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900' size={16} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                      placeholder='********'
                      className='w-full pl-10 pr-10 py-2.5 bg-neutral-100 border border-neutral-700 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-primary-800'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500'
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className='text-xs text-neutral-800 mt-1'>Must be at least 8 characters.</p>
                </div>

                <Button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-primary-800 hover:bg-primary-900 text-white py-2.5 rounded-lg font-bold text-sm transition'
                >
                  {isLoading ? 'Creating Account...' : 'Create Account →'}
                </Button>
              </form>

              {/* Divider (matches Login) */}
              <div className='flex items-center my-6'>
                <div className='flex-1 h-px bg-neutral-600' />
                <span className='px-3 text-xs text-neutral-800'>OR CONTINUE WITH EMAIL</span>
                <div className='flex-1 h-px bg-neutral-600' />
              </div>

              {/* Google Button (matches Login) */}
              <button
                type='button'
                className='w-full flex items-center justify-center gap-2 py-2.5 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition'
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              {/* Sign in link */}
              <p className='text-center text-sm text-neutral-900 mt-6'>
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/login')}
                  className='text-primary-800 font-semibold cursor-pointer hover:underline'
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer links (matches Login) */}
        <div className='flex gap-4 text-xs text-neutral-500 mt-4'>
          <a href='#' className='hover:underline'>Privacy Policy</a>
          <a href='#' className='hover:underline'>Terms of Service</a>
          <a href='#' className='hover:underline'>Help Center</a>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Account Created Successfully!"
        message="Welcome to Education Bridge. You are all set."
        buttonText="Continue to Dashboard"
        onConfirm={() => navigate('/dashboard')}
      />
    </>
  );
};

export default SignUp;