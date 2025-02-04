"use client";

import ButtonGroup from "@/app/components/ButtonGroup";

export default function Chatbox() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-gray-300 rounded-lg shadow-md">
      {/* Chatbar */}
      <div className="flex items-center w-full gap-3 p-4 bg-gray-700 rounded-full">
       
        {/* Left Section: Icons */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500">
          <span className="text-white text-xl">+</span>
        </button>

        {/* Input Field */}
        <input
          type="text"
          className="flex-1 px-4 py-2 text-white bg-transparent outline-none placeholder-gray-400"
          placeholder="Message CelesteGPT"
        />

        {/* Right Section: Icons */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500">
          <span className="text-darkgray text-xl">↑</span>
        </button>
      </div>
      <ButtonGroup />
    </div>
  );
}
