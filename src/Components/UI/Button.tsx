import React from "react";

interface ButtonProps {
    label: string;
    variant?: "primary" | "outline";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
    label,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}) => {
    const baseStyle =
        "px-8 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 \
    active:scale-95 focus:outline-none focus:ring-4 flex items-center justify-center";

    const variants = {
        primary:
            "bg-red-700 text-white shadow-md shadow-red-900/20 \
      hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/30 \
      focus:ring-red-300",

        outline:
            "border-2 border-red-700 text-red-700 bg-transparent \
      hover:bg-red-50 \
      focus:ring-red-100",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;