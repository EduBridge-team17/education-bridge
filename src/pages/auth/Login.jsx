import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../../component/Button';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        localStorage.setItem('token', data.session.access_token);
        navigate('/dashboard');
      }
    } catch (err) {
      setErrorMessage('Login failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form onSubmit={handleLogin} className='w-full max-w-md p-8 bg-white rounded-lg shadow-md space-y-4'>
        <h2 className='text-2xl font-bold'>Login</h2>

        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}

        <div className='relative'>
          <Mail size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className='w-full pl-10 pr-4 py-3 border rounded-lg' />
        </div>

        <div className='relative'>
          <Lock size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required onChange={handleChange} className='w-full pl-10 pr-10 py-3 border rounded-lg' />
          <div onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </div>
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in →'}
        </Button>

        <p className='text-center text-sm'>
          Don’t have an account? <span onClick={() => navigate('/signup')} className='text-blue-600 cursor-pointer'>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;