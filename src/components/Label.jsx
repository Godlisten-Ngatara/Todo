import React from "react";

function Label({ children, className = "" }) {
  return <p className={className}>{children}</p>;
}

export default Label;
