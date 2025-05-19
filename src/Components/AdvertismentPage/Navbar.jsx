import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Import useNavigate
import gsap from 'gsap';

export const Navbar = () => {
  const headingRef = useRef(null);
  const navigate = useNavigate(); // 🔹 Create navigate instance

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      }
    );
  }, []);

  // 🔹 Handle navigation
  const handleSignIn = () => {
    navigate('/login');
  };
  

  return (
    <div className="shadow-md bg-blue-50 bg-opacity-70 p-7 backdrop-blur-md rounded-b-3xl">
      <h1
        ref={headingRef}
        className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text"
      >
        Student Internships Hub!
      </h1>

      <p className="max-w-3xl pt-6 mx-auto text-center text-gray-700">
        Discover internship opportunities and post openings to connect students with real-world experience.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 pt-12 sm:flex-row">
        <button
          onClick={handleSignIn}
          className="px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-md shadow-md buttonAnimation bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:opacity-90"
        >
          Sign in
        </button>
        <button
          
          className="px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-md shadow-md buttonAnimation bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:opacity-90"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
