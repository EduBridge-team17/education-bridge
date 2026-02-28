import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Fixed handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fixed login (single fetch, no duplicates)
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://edu-bridge-backend-z68e.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-1/2 bg-[#1F7A6B] p-12 flex-col justify-between text-white">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap size={18} />
            <span className="font-semibold text-sm">
              Education Bridge
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-6">
            Empowering Rural <br />
            Education Across Nigeria.
          </h1>

          <p className="text-sm opacity-80 max-w-[300px]">
            Join thousands of SS1-SS3 students and teachers
            bridging the digital divide.
          </p>
        </div>

        <div>
          <div className="flex -space-x-3 mb-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white border-2 border-[#1F7A6B]"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-white text-[#1F7A6B] flex items-center justify-center text-xs font-bold">
              +2k
            </div>
          </div>

          <p className="text-xs opacity-70">
            Trusted by over 2,000 schools in rural communities.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-[#F9FAFB] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Log in
        </h2>

        <p className="text-sm text-gray-500 mb-8">
          Choose your role to continue
        </p>

        {errorMessage && (
          <div className="mb-4 text-sm text-red-500">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Full Name */}
          <div className="relative">
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A6B]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
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
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-[#1F7A6B] cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1F7A6B] text-white py-3 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            {isLoading ? "Verifying..." : "Log in →"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?
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
