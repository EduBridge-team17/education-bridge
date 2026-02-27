// SignupPage.jsx
import React, { useState } from "react";
import logoImage from "../../assets/Overlay+OverlayBlur.png";
import personIcon from "../../assets/PERSON.png";
import phoneIcon from "../../assets/phone.png";
import lockIcon from "../../assets/lock.png";
import eyeIcon from "../../assets/eye.png";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-[1100px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-row">
          {/* Left Panel - Branding & Hero */}
          <div className="w-1/2 min-w-[460px] bg-teal-700 text-white p-14 flex flex-col justify-between relative">
            <div>
              {/* Branding with Logo on the left */}
              <div className="flex items-center gap-3 mb-10">
                <img
                  src={logoImage}
                  alt="Education Bridge Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="text-2xl font-bold tracking-tight">
                  Education Bridge
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-bold leading-tight mb-5">
                  Empowering Rural Education Across Nigeria
                </h1>
                <p className="text-lg leading-relaxed opacity-90">
                  Join thousands of SS1–SS3 students and teachers bridging the
                  digital divide with offline-first learning tools.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex mb-3">
                <div className="w-12 h-12 rounded-full border-2 border-teal-700 bg-white -ml-4 first:ml-0" />
                <div className="w-12 h-12 rounded-full border-2 border-teal-700 bg-white -ml-4" />
                <div className="w-12 h-12 rounded-full border-2 border-teal-700 bg-white -ml-4" />
                <div className="w-12 h-12 rounded-full border-2 border-teal-700 bg-white -ml-4 flex items-center justify-center text-sm font-bold text-teal-700 shadow-sm">
                  +2k
                </div>
              </div>
              <div className="text-sm opacity-90">
                Trusted by over 2,000 schools in rural communities.
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-1/2 min-w-[460px] p-14 bg-white">
            <div className="max-w-md mx-auto flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                <p className="text-gray-500">
                  Start your learning journey today.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-1.5 flex">
                <button className="flex-1 py-2.5 px-6 rounded-lg bg-white shadow-sm border border-gray-200 text-teal-700 font-semibold">
                  Student
                </button>
                <button className="flex-1 py-2.5 px-6 rounded-lg text-gray-500 font-medium">
                  Teacher
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <img
                      src={personIcon}
                      alt=""
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 object-contain"
                    />
                    <input
                      type="text"
                      placeholder="e.g. Chinedu Okafor"
                      className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100/30 transition-all"
                    />
                  </div>
                </div>

                {/* Phone / Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number or Email
                  </label>
                  <div className="relative">
                    <img
                      src={phoneIcon}
                      alt=""
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 object-contain"
                    />
                    <input
                      type="tel"
                      placeholder="+234 80..."
                      className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100/30 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <img
                      src={lockIcon}
                      alt=""
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 object-contain"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full h-12 pl-12 pr-12 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100/30 transition-all"
                    />
                    <img
                      src={eyeIcon}
                      alt=""
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 object-contain cursor-pointer select-none hover:opacity-70 transition-all"
                      onClick={togglePasswordVisibility}
                      role="button"
                      tabIndex={0}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          togglePasswordVisibility();
                        }
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters.
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 accent-teal-600 flex-shrink-0"
                  />
                  <div>
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-teal-700 underline hover:text-teal-800 transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-teal-700 underline hover:text-teal-800 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </label>

                <button className="bg-teal-700 text-white font-bold py-3.5 px-4 rounded-2xl hover:bg-teal-800 transition-colors">
                  Create Account
                </button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      {/* <div className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center z-50 hover:shadow-2xl transition-shadow">
        <span className="material-icons text-2xl text-gray-600">
          help_outline
        </span>
      </div> */}
    </>
  );
};

export default SignupPage;
