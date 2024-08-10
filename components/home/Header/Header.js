"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { MenuOpenState } from "../../../recoil/dashboardRecoil";
const Header = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(MenuOpenState);

  return (
    <header className="bg-blue-700 fixed top-0 left-0 w-full z-50 ">
      <nav className="flex justify-between items-center py-4 px-8 w-full">
        {/* Left-aligned icons */}
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-50 hover:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="font-bold text-lg text-gray-50 hover:gray-200 cursor-pointer">
            T3 Project
          </div>
        </div>

        {/* Right-aligned icons and links */}
        <div className="flex items-center space-x-3">
          <button className="text-gray-50 hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="text-gray-50 hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gray-50 hover:text-gray-200">
              Username
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-gray-50 hover:text-gray-200 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
