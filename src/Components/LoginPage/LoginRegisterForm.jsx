import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginRegisterForm = () => {
  // Simulating role selection: 'student' | 'company' | 'admin'
  const [role, setRole] = useState('student'); // Change this to switch roles

  // Dynamic field label based on role
  const getUsernamePlaceholder = () => {
    if (role === 'student') return 'Student Email';
    if (role === 'company') return 'Company Email';
    if (role === 'admin') return 'Admin Username';
    return 'Username';
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Login Card */}
      <div className="z-10 w-[380px] rounded-xl bg-white shadow-2xl overflow-hidden border border-blue-300/40 backdrop-blur-md">
        
        {/* Top Gradient Header */}
        <div className="p-6 text-center text-white bg-gradient-to-b from-blue-800 to-blue-400">
          <h1 className="text-2xl font-semibold">HELLO & WELCOME</h1>
          <p className="mt-2 text-sm leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
          </p>
        </div>

        {/* White form section */}
        <div className="px-6 py-8">
          <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">USER LOGIN</h2>

          {/* Role Selector (for demonstration) */}
          <div className="mb-4 text-center">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-1 text-sm border rounded"
            >
              <option value="student">Student</option>
              <option value="company">Company</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <form className="space-y-4">
            {/* Username/Email Input */}
            <div className="flex items-center px-3 py-2 bg-gray-100 rounded">
              <FaUser className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder={getUsernamePlaceholder()}
                className="w-full text-sm text-gray-800 bg-transparent focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center px-3 py-2 bg-gray-100 rounded">
              <FaLock className="mr-2 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-sm text-gray-800 bg-transparent focus:outline-none"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-indigo-600" />
                <span>Remember</span>
              </label>
              <button type="button" className="text-gray-500 hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white rounded bg-gradient-to-r from-indigo-700 to-blue-500 hover:opacity-90"
            >
              LOGIN
            </button>

            {/* Signup Link */}
            <div className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="font-medium text-blue-600 hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
