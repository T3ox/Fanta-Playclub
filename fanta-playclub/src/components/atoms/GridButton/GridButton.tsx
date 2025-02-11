import React from "react";
import "./styles.scss";
import Props from "./types";

const GridButton: React.FC<Props> = ({ label, onClick, isActive }) => (
    <button
        className={`btn grid-button ${isActive ? "active" : ""}`}
        onClick={() => onClick(label)}
    >
        {label}
    </button>
);

export default GridButton;
