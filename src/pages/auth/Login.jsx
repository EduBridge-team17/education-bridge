import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
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
    setErrorMessage('');

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
    <>
      <div className='min-h-screen bg-neutral-100 flex items-center justify-center p-4 font-secondary'>
        <div className='w-full max-w-[450px] bg-white p-8 rounded-2xl shadow-2xl'>

          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Welcome Back</h2>
          <p className='text-sm text-gray-500 mb-6'>Log in to continue</p>

          {errorMessage && (
            <p className='text-red-500 text-sm mb-4'>{errorMessage}</p>
          )}

          <form onSubmit={handleLogin} className='space-y-4'>

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
              {isLoading ? 'Logging in...' : 'Log In →'}
            </Button>

            <p className='text-center text-sm text-gray-500'>
              Don't have an account?
              <span
                onClick={() => navigate('/signup')}
                className='text-[#1F7A6B] font-semibold cursor-pointer ml-1'
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Login Successful!"
        message="You have logged in successfully."
        buttonText="Continue"
        onConfirm={() => navigate('/dashboard')} // replace with your actual landing page
      />
    </>
  );
};

export default Login;