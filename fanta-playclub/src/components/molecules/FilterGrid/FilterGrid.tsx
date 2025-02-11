import React, { useState } from "react";
import "./styles.scss";
import GridButton from "../../atoms/GridButton/GridButton";

const FilterGrid: React.FC<{
    labels: string[];
    onSelect: (label: string | null) => void;
}> = ({ labels, onSelect }) => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (label: string) => {
        if (activeButton === label) {
            setActiveButton(null);
            onSelect(null);
        } else {
            setActiveButton(label);
            onSelect(label);
        }
    };

    return (
        <div className="d-flex flex-wrap">
            {labels.map((label, key) => (
                <div className="m-1" key={key}>
                    <GridButton label={label} />
                </div>
            ))}
        </div>
    );
};

export default FilterGrid;
