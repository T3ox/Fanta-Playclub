import React from "react";
import { useModal } from "../../../utils/context/FiltersModal";
import "./styles.scss";
import Props from "./types";
import Button from "../../atoms/Button/Button";

const FilterGrid: React.FC<Props> = ({ labels, type }) => {
    const { roleFilter, teamFilter, updateRoles, updateTeams } = useModal();

    const handleButtonClick = (label: string) => {
        const isRole = type === "role";
        const currentFilter = isRole ? roleFilter : teamFilter;
        const updateFilter = isRole ? updateRoles : updateTeams;

        const updatedFilter = currentFilter.includes(label)
            ? currentFilter.filter(item => item !== label)
            : [...currentFilter, label];

        updateFilter(updatedFilter);
    };


    return (
        <div className="d-flex flex-wrap">
            {labels.map((label, key) => {
                const isActive = type === "role"
                    ? roleFilter.includes(label)
                    : teamFilter.includes(label);
                
                return(<div className="m-1" key={key}>
                    <Button 
                        text={label}
                        handle={() => {
                            handleButtonClick(label)
                        }}
                        className={`btn grid-button ${isActive ? "active" : ""}`}
                        isActive={isActive}/>
                    
                </div>)
})}
        </div>
    );
};

export default FilterGrid;
