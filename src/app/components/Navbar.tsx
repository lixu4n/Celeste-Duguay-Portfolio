"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between text-white px-4 py-3">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        {/* Profile Photo */}
        <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-sm font-bold">CD</span>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-0 h-full w-64 bg-sidegpt text-white z-50 shadow-lg"
      >
        <div className="p-4">
          <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white focus:outline-none">
            Close
          </button>
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <Link href="#" legacyBehavior>
                <a className="hover:text-orange-500">ChatGPT</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" legacyBehavior>
                <a className="hover:text-orange-500">Sora</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" legacyBehavior>
                <a className="hover:text-orange-500">Explore GPTs</a>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
