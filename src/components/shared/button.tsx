import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  roundedFull?: boolean; // For rounded corners (default: false)
  disabled?: boolean;
  className?: string; // For custom classes
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  roundedFull = false,
  disabled = false,
  className = "",
}: ButtonProps){
  // Base styles
  const baseStyles = `${roundedFull ? '!rounded-full' : ''} inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed`;

  // Variants
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-blue-300",
    secondary: "bg-secondary text-white hover:bg-gray-600 focus:ring-gray-300",
    outline: "border border-primary text-primary hover:bg-blue-100 focus:ring-blue-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  // Sizes
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};
