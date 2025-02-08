import React from "react";
import  VetrinaTextProps  from "./types";
import "./style.scss"

const VetrinaText: React.FC<VetrinaTextProps> = ({ text, description }) => {
    return (
        <div className="vetrina-text-container m-2">
            <h2 className="py-2">{text}</h2>
            <span>{description}</span>
        </div>
    );
};

export default VetrinaText;
