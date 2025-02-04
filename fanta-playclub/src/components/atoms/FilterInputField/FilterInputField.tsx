import React from "react";
import "./styles.scss";
import Props from "./types";

const FilterInputField: React.FC<Props> = ({ placeholder, value, title }) => (
    <div className="filter-section">
        <span>{title}</span>
        <input
            className="filter-section_text my-2"
            type="text"
            placeholder={placeholder}
            value={value}
            //onChange={onChange}
        />
    </div>
);

export default FilterInputField;
