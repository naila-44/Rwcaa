"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    < >
      <nav className=" sticky bg-white/66  py-4 px-6 flex items-center justify-between  backdrop-blur-sm shadow-sm">

      
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

       
        <div className="hidden md:block relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#1D4077] text-white px-4 py-2 rounded-md hover:bg-[#3566B2]"
          >
            Menu
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#1D4077]">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

    
      {menuOpen && (
        <div className="md:absolute md:right-6 md:top-20 bg-white shadow-lg p-4 space-y-4 font-medium text-[#1D4077] w-full md:w-60 z-50">

          <a href="/" className="block hover:text-[#3566B2]">Home</a>
          <a href="/about" className="block hover:text-[#3566B2]">About</a>
          <a href="/services" className="block hover:text-[#3566B2]">Services</a>
          <a href="/success-stories" className="block hover:text-[#3566B2]">Success Stories</a>
          <a href="/events-resources" className="block hover:text-[#3566B2]">Events&Resources</a>
          <a href="/resources" className="block hover:text-[#3566B2]">Resources</a>
          <a href="/contact" className="block hover:text-[#3566B2]">Contact</a>

          {isLoggedIn ? (
            <a
              href="/dashboard"
              className="block bg-[#1D4077] text-white px-4 py-2 rounded-md text-center"
            >
              Dashboard
            </a>
          ) : (
            <a
              href="/login"
              className="block bg-[#1D4077] text-white px-4 py-2 rounded-md text-center"
            >
              Login
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
