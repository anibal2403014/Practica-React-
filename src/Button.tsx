import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  /** Si es true, el botón será redondeado */
  rounded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  rounded = false,
  className = "",
  children,
  ...props
}) => {
  const base =
    "px-4 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2";

  let styles = "";
  if (variant === "outline") {
    styles =
      "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-indigo-600";
  } else if (variant === "destructive") {
    styles =
      "bg-red-500 text-white hover:bg-red-600 focus-visible:outline-indigo-600";
  } else {
    styles =
      "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600";
  }

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  return (
    <button className={`${base} ${styles} ${roundedClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
