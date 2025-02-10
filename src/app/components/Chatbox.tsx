"use client";

import ButtonGroup from "@/app/components/ButtonGroup"; // Ensure this path is correct

export default function Chatbox() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-fontcolor2 rounded-lg">
      {/* Chatbar */}
      <div className="flex items-center w-full gap-3 p-4 bg-chatbox rounded-full">
        {/* Add Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gptcolor hover:bg-gray-500">
          <span className="text-fontcolor2 text-xl">+</span>
        </button>

        {/* Chat Input */}
        <input
          type="text"
          className="flex-1 px-4 py-2 text-fontcolor2 bg-transparent outline-none placeholder-fontcolor2"
          placeholder="Message CelesteGPT"
        />

        {/* Send Button */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-buttoncolor hover:bg-gray-500">
          <span className="text-black text-xl">↑</span>
        </button>
      </div>

      {/* Button Group */}
      <ButtonGroup />
    </div>
  );
}
