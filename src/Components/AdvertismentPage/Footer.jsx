import React from 'react';

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-between px-6 py-4 overflow-hidden text-sm text-blue-900 shadow-inner footer-water-drops sm:flex-row bg-white/60 backdrop-blur-md rounded-t-xl">
      <span className="z-10 mb-2 sm:mb-0">© {new Date().getFullYear()} InternLink</span>
      <div className="z-10 space-x-4">
        <a href="/privacy" className="transition hover:underline hover:text-blue-600">Privacy</a>
        <a href="/terms" className="transition hover:underline hover:text-blue-600">Terms</a>
        <a href="/contact" className="transition hover:underline hover:text-blue-600">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
