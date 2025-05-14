import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-4 py-3 text-sm text-white bg-gray-700 ">
      <span>© {new Date().getFullYear()} InternLink</span>
      <div className="space-x-4">
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
