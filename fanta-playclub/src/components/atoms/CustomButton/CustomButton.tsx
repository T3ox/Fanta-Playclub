import React from "react";
import "./styles.scss";

interface ButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`button ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default CustomButton;
