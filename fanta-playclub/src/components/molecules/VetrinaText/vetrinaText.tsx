import React from "react";
import "./style.scss";
import VetrinaTextProps from "./types";

const VetrinaText: React.FC<VetrinaTextProps> = ({ text, description }) => {
    return (
        <div className="vetrina-text-container m-2">
            <h2 className="py-2">{text}</h2>
            <span>{description}</span>
        </div>
    );
};

export default VetrinaText;
