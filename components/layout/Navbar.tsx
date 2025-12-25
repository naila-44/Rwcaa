"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminExists, setAdminExists] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    fetch("/api/auth/check-admin")
      .then((res) => res.json())
      .then((data) => setAdminExists(data.exists))
      .catch(() => setAdminExists(true));
  }, []);

  return (
    <nav className="sticky bg-white/90 py-4 px-6 flex items-center justify-between backdrop-blur-sm shadow-sm z-50">
     
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

    
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-[#1D4077] focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

    
      {menuOpen && (
        <div className="absolute top-full right-6 mt-2 bg-white shadow-lg p-4 space-y-4 font-medium text-[#1D4077] w-56 rounded-lg">
          <a href="/" className="block hover:text-[#3566B2]">
            Home
          </a>
         
          <a href="/services" className="block hover:text-[#3566B2]">
            Services
          </a>
          <a href="/success-stories" className="block hover:text-[#3566B2]">
            Success Stories
          </a>
          <a href="/events-resources" className="block hover:text-[#3566B2]">
            Events&Resources
          </a>
          <a href="/resources" className="block hover:text-[#3566B2]">
            Resources
          </a>
          <a href="/contact" className="block hover:text-[#3566B2]">
            Contact
          </a>

         
          {isLoggedIn ? (
            <a
              href="/dashboard"
              className="block bg-[#1D4077] text-white px-4 py-2 rounded-md text-center"
            >
              Dashboard
            </a>
          ) : adminExists ? (
            <a
              href="/admin/login"
              className="block bg-[#1D4077] text-white px-4 py-2 rounded-md text-center"
            >
              Admin Login
            </a>
          ) : (
            <a
              href="/admin/register"
              className="block bg-[#1D4077] text-white px-4 py-2 rounded-md text-center"
            >
              Register Admin
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
