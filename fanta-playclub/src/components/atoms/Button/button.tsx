import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;