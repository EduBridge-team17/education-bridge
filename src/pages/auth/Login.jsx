import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  Smartphone,
  Info,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

        {/* Info Card */}
        <div className="flex items-start gap-3 bg-blue-50 text-blue-700 p-4 rounded-lg text-sm">
          <Info className="w-5 h-5 mt-0.5" />
          <p>
            For School and NGO accounts, please note that this account will be
            reviewed by an admin before full access is granted.
          </p>
        </div>

        {/* Logo Section */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-500 text-sm">
            Login to continue to your account
          </p>
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Continue with Google */}
        <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">

          {/* Google Icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.88-6.88C35.68 2.36 30.2 0 24 0 14.64 0 6.46 5.4 2.44 13.32l8.02 6.22C12.6 13.28 17.84 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.64-.15-3.22-.43-4.74H24v9h12.7c-.55 2.95-2.2 5.45-4.7 7.14l7.27 5.64C43.94 37.1 46.5 31.32 46.5 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.46 28.54a14.49 14.49 0 010-9.08l-8.02-6.22A23.94 23.94 0 000 24c0 3.84.92 7.47 2.44 10.76l8.02-6.22z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.2 0 11.68-2.04 15.57-5.56l-7.27-5.64c-2.02 1.36-4.6 2.2-8.3 2.2-6.16 0-11.4-3.78-13.54-9.04l-8.02 6.22C6.46 42.6 14.64 48 24 48z"
            />
          </svg>

          <span>Continue with Google</span>
        </button>

        {/* Optional Mobile Login */}
        <button className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-50 transition">
          <Smartphone className="w-5 h-5 text-gray-500" />
          Continue with Phone
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
