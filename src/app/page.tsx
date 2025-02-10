"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Chatbox from "@/app/components/Chatbox";
import Footer from "@/app/components/Footer";

import { motion } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen bg-gptcolor text-fontcolor1 flex flex-col">
      {/* Navbar */}
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <motion.div
        className="flex-grow flex flex-col items-center justify-center text-center"
        animate={{ marginLeft: isSidebarOpen ? "16rem" : "0rem" }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4" >Hi, I&apos;m Céleste!</h1>
          <p className="text-lg mb-2">I specialize in sleek, AI-powered applications.</p>
          <p>Ask CelesteGPT for more information on my portfolio.</p>
        </header>

        <section className="w-full sm max-w-2xl">
          <Chatbox />
        </section>
         {/* Footer */}
      <Footer />
      </motion.div>

     
    </div>
  );
}
