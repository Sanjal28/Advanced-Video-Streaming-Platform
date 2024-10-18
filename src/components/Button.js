import React from "react";

function Button({ name }) {
  return (
    <div className="flex space-x-3 overflow-x-auto scrollbar-hide  p-2 bg-white sticky top-[64px] z-10">
      {name.map((name, index) => (
        <button key={index} className="px-4 py-1 m-3 bg-gray-200 rounded-lg whitespace-nowrap">{name}</button>
      ))}
    </div>
  );
}

export default Button;
