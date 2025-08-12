import React from "react";

function TextArea({name, value, placeholder, onChange}) {
  return (
    <textarea
      name={name}
      id=""
      value={value}
      placeholder={placeholder}
      rows={4}
      cols={50}
      className="outline-none focus:ring-gray-300 focus:ring-2 border-2 border-gray-300 rounded-lg p-2"
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
}

export default TextArea;
