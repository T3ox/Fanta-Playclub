import React from "react";
import "./styles.scss";
import Props from "./types";

const GridButton: React.FC<Props> = ({ label }) => (
    <button className="btn grid-button">{label}</button>
);

export default GridButton;
