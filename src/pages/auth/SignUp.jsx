import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, GraduationCap, Smartphone } from 'lucide-react';
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1️⃣ Create Supabase Auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullName: formData.fullName,
            role: formData.role,
            phone: formData.phone
          }
        }
      });

      if (authError) throw authError;

      // 2️⃣ Insert into public.users
      const { error: dbError } = await supabase
        .from('users')
        .insert([{
          id: authData.user.id, // sync auth ID
          name: formData.fullName,
          role: formData.role,
          email: formData.email,
          phone: formData.phone
        }]);

      if (dbError) throw dbError;

      setIsSuccessOpen(true);

    } catch (err) {
      console.error(err);
      alert(err.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-neutral-100 flex items-center justify-center p-4 font-secondary'>
        <div className='w-full max-w-[850px] flex bg-white rounded-2xl shadow-2xl overflow-hidden'>
          {/* Left panel */}
          <div className='hidden lg:flex w-1/2 bg-[#1F7A6B] p-10 flex-col justify-between text-white'>
            <div>
              <div className='flex items-center gap-2 mb-6'>
                <GraduationCap size={14} />
                <span className='font-bold'>Education Bridge</span>
              </div>
              <h1 className='text-3xl font-bold leading-snug mb-4'>
                Empowering Rural Education Across Nigeria.
              </h1>
              <p className='text-sm opacity-90 max-w-[260px]'>
                Join thousands of students and teachers bridging the digital divide.
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div className='flex-1 p-8'>
            <h2 className='text-2xl font-bold text-gray-800'>Create account</h2>
            <form onSubmit={handleSignUp} className='space-y-4 mt-4'>
              <select name="role" required onChange={handleChange} className='w-full px-4 py-3 border rounded-lg'>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>

              <div className='relative'>
                <User size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input type="text" name="fullName" required placeholder="Full Name" onChange={handleChange} className='w-full pl-10 pr-4 py-3 border rounded-lg' />
              </div>

              <div className='relative'>
                <Mail size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input type="email" name="email" required placeholder="Email" onChange={handleChange} className='w-full pl-10 pr-4 py-3 border rounded-lg' />
              </div>

              <div className='relative'>
                <Smartphone size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className='w-full pl-10 pr-4 py-3 border rounded-lg' />
              </div>

              <div className='relative'>
                <Lock size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input type={showPassword ? 'text' : 'password'} name="password" required placeholder="Password" onChange={handleChange} className='w-full pl-10 pr-10 py-3 border rounded-lg' />
                <div onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </div>
              </div>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Create Account →'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Account Created Successfully!"
        message="You can now log in."
        buttonText="Go to Login"
        onConfirm={() => navigate('/login')}
      />
    </>
  );
};

export default SignUp;