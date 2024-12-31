import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
      {children}
    </button>
  );
};

export default Button;
