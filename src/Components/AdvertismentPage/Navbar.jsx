import React from 'react'

export const Navbar = () => {
  return (
    <div className='mt-5 p-7 '>
        <h1 className="text-5xl font-bold text-center text-transparent text-white bg-gradient-to-r bg-clip-text ">
            Student Internships Hub!
        </h1>
        <p className="pt-6 text-center text-white">
          Discover internship opportunities and post openings to connect students with real-world experience
        </p>
        <div className='items-center justify-center p-8 pt-20 text-center'>
            <button 
              className="px-5 py-2 mx-3 text-xl font-semibold text-white transition duration-200 rounded-md shadow bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 hover:opacity-80">
              Get Started
            </button>

          </div>
    </div>
  )
}
