import React from "react";
import "./style.scss";
import VetrinaTextProps from "./types";

const VetrinaText: React.FC<VetrinaTextProps> = ({ title, description }) => {
    
    
    const { content, moreContent, list } = description

    console.log(list);

    return (
        <div className="vetrina-text-container m-2">
            <h2 className="py-2">{title}</h2>
            <span>{content}</span>
            <span>{moreContent}</span>
        </div>
    );
};

export default VetrinaText;
