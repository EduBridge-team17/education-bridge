import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { User, Mail, Smartphone, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ role: "", fullName: "", email: "", phone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { fullName: formData.fullName, role: formData.role, phone: formData.phone },
        },
      });

      if (error) alert(error.message);
      else {
        alert("Account created successfully! Please login.");
        navigate("/login");
      }
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[850px] flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden lg:flex w-1/2 bg-[#1F7A6B] p-10 flex-col justify-between text-white">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={14} />
              <span className="font-bold">Education Bridge</span>
            </div>
            <h1 className="text-3xl font-bold leading-snug mb-4">
              Empowering Rural Education Across Nigeria.
            </h1>
            <p className="text-sm opacity-90 max-w-[260px]">
              Join thousands of SS1-SS3 students and teachers bridging the digital divide.
            </p>
          </div>
        </div>

        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-800">Create account</h2>
          <p className="text-sm text-gray-500 mb-6">Choose your role to continue</p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <select
              name="role"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                required
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
              />
            </div>

            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
              />
            </div>

            <div className="relative">
              <Smartphone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="phone"
                placeholder="+234 80..."
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
              />
            </div>

            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="********"
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1F7A6B] text-white py-3 rounded-lg font-semibold"
            >
              {isLoading ? "Creating Account..." : "Create Account →"}
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#1F7A6B] font-semibold cursor-pointer ml-1"
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;