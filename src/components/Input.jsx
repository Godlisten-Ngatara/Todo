import React from "react";

function Input({ type, value, name, placeholder, onChange}) {
  return (
    <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`w-full outline-none focus:ring-gray-300 focus:ring-2 p-2 rounded-lg border-2 border-gray-300`}
        onChange={(e) => onChange(name, e.target.value)}
      />
  );
}

export default Input;
