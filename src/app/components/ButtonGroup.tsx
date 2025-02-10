"use client";

export default function ButtonGroup() {
  const buttons = [
    { label: "About Me", icon: "👩🏻", onClick: () => alert("About me clicked!") },
    { label: "Skills", icon: "🛠️", onClick: () => alert("Skills clicked!") },
    { label: "Experience", icon: "📄", onClick: () => alert("Experience clicked!") },
    { label: "Projects", icon: "🚀", onClick: () => alert("Projects clicked!") },
    { label: "Contacts", icon: "💻", onClick: () => alert("Contact clicked!") },
  ];

  return (
    <div className="flex items-center gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
         className="flex items-center gap-2 px-4 py-2 rounded-full bg-gptcolor text-fontcolor2 hover:bg-gray-600 transition outline outline-2 outline-chatbox outline-offset-2"
         >
          <span>{button.icon}</span>
          <span className="text-sm">{button.label}</span>
        </button>
      ))}
    </div>
  );
}
