import React, { useState } from "react";
import FilterInputField from "../../atoms/FilterInputField/FilterInputField";
import DoubleSlider from "../../atoms/FilterPriceSlider/FilterPriceSlider"; // Assicurati che il percorso sia corretto
import ButtonGrid from "../../molecules/ButtonGrid/buttonGrid";
import "./filters.css";

const FILTERSVALUES = {
    minimumCost: 1,
    maximumCost: 5,
};

interface FiltersProps {
    search: string;
    setSearch: (value: string) => void;
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    roleFilter: string | null;
    setRoleFilter: (role: string | null) => void; // Updated to accept null
    teamFilter: string | null;
    setTeamFilter: (team: string | null) => void; // Updated to accept null
}

const Filters: React.FC<FiltersProps> = ({
    search,
    setSearch,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    roleFilter,
    setRoleFilter,
    teamFilter,
    setTeamFilter,
}) => {
    const [sliderValue, setSliderValue] = useState([
        FILTERSVALUES.minimumCost,
        FILTERSVALUES.maximumCost,
    ]);
    return (
        <div className="filters-section">
            <FilterInputField
                placeholder={"Cerca un nome"}
                value={""}
                title={"Nome"}
            />

            <DoubleSlider
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                title="Prezzo"
            />

            <h3>Filtro Ruolo</h3>
            <ButtonGrid
                labels={["Top Laner", "Jungler", "Mid Laner", "ADC", "Support"]}
                onSelect={setRoleFilter}
            />

            <h3>Filtro Squadra</h3>
            <ButtonGrid
                labels={["Pc1", "Pc2", "Pc3", "Pc4"]}
                onSelect={setTeamFilter}
            />
        </div>
    );
};

export default Filters;
