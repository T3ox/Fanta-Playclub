import React, { ChangeEvent } from "react";
import "./styles.scss";
import Props from "./types";
import { useModal } from "../../../utils/context/FiltersModal";

const CustomInputField: React.FC<Props> = ({ placeholder }) => {
    const { search, setSearch } = useModal();

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value);
    };

    return (
        <div className="filter-section">
            <input
                className="filter-section_text my-2"
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomInputField;
