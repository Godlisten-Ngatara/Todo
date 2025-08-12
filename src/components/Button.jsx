import React, { Children } from "react";
function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-700 focus:ring-gray-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const classes = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  return (
    <button className={classes} onClick={onClick} type={type} {...props}>
      {children || "Button"}
    </button>
  );
}

export default Button;
