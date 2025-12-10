import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between transition-all">
    
      <div className="flex items-center space-x-3">
        <img
          src="/icons/logo.jpg" 
          alt="RWCAA Logo"
          className="h-16 w-auto object-contain"
        />
        <div className="leading-tight">
          <span className="text-[#1D4077] font-bold text-xl md:text-2xl block">
            Restorative
          </span>
          <span className="text-[#1D4077] font-normal text-base md:text-lg block">
            Wellness Center
          </span>
        </div>
      </div>

  
      <div className="hidden md:hidden space-x-6 font-medium text-[#1D4077]">
        <a href="/" className="hover:text-[#3566B2]">Home</a>
        <a href="/about" className="hover:text-[#3566B2]">About</a>
        <a href="/services" className="hover:text-[#3566B2]">Services</a>
        <a href="/success-stories" className="hover:text-[#3566B2]">Success Stories</a>
        <a href="/events" className="hover:text-[#3566B2]">Events</a>
        <a href="/resources" className="hover:text-[#3566B2]">Resources</a>
        <a href="/contact" className="hover:text-[#3566B2]">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-[#1D4077]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
