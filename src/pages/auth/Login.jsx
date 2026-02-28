import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) setErrorMessage(error.message);
      else {
        localStorage.setItem("token", data.session.access_token);
        navigate("/dashboard");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-[#1F7A6B] p-12 flex-col justify-between text-white">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap size={18} />
            <span className="font-semibold text-sm">Education Bridge</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight mb-6">
            Empowering Rural <br />
            Education Across Nigeria.
          </h1>
          <p className="text-sm opacity-80 max-w-[300px]">
            Join thousands of SS1-SS3 students and teachers bridging the digital divide.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-[#F9FAFB] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Log in</h2>
        <p className="text-sm text-gray-500 mb-8">Enter your account details</p>

        {errorMessage && <div className="mb-4 text-sm text-red-500">{errorMessage}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
            />
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
              onChange={handleChange}
              className="w-full pl-11 pr-11 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1F7A6B] text-white py-3 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            {isLoading ? "Verifying..." : "Log in →"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#1F7A6B] font-semibold cursor-pointer ml-1 hover:underline"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;