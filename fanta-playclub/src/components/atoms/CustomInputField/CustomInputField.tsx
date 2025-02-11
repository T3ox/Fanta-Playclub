import React from "react";
import "./styles.scss";
import Props from "./types";

const CustomInputField: React.FC<Props> = ({ placeholder }) => (
    <div className="filter-section">
        <input
            className="filter-section_text my-2"
            type="text"
            placeholder={placeholder}
        />
    </div>
);

export default CustomInputField;
