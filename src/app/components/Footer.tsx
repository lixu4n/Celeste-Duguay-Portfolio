// src/components/Footer.js
"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" fixed bottom-0 w-full py-4 text-sm text-fontcolor2 text-center">
      <p>CelesteGPT can make little to no mistakes. Check important info.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="no-underline hover:underline text-fontcolor2 hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="no-underline hover:underline text-fontcolor2 hover:text-gray-400"
        >
          LinkedIn
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="no-underline hover:underline text-fontcolor2 hover:text-gray-400"
        >
          Info
        </a>
      </div>
    </footer>
  );
};

export default Footer;
