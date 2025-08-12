import React from "react";

function CardTitle({ children, className = "" }) {
  return <h2 className={`font-semibold text-lg ${className}`}>{children}</h2>;
}

export default CardTitle;
