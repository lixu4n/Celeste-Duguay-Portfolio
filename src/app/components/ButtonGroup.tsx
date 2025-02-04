"use client";

export default function ButtonGroup() {
  const buttons = [
    { label: "About Me", icon: "👩🏻", onClick: () => alert("About me clicked!") },
    { label: "Skills", icon: "🛠️", onClick: () => alert("Skills clicked!") },
    { label: "Experience", icon: "📄", onClick: () => alert("Experience clicked!") },
    { label: "Projects", icon: "🚀", onClick: () => alert("Projects clicked!") },
  ];

  return (
    <div className="flex items-center gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
        >
          <span>{button.icon}</span>
          <span className="text-sm">{button.label}</span>
        </button>
      ))}
    </div>
  );
}
