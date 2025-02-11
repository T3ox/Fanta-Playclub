import { useState } from "react";
import FilterInputField from "../../atoms/FilterInputField/FilterInputField";
import ButtonGrid from "../../molecules/ButtonGrid/buttonGrid";
import "./styles.scss";

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

const Filters = () =>
    /*{
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
}*/
    {
        const [sliderValue, setSliderValue] = useState([
            FILTERSVALUES.minimumCost,
            FILTERSVALUES.maximumCost,
        ]);

        const [selectedTeam, setSelectedTeam] = useState("LoL");

        const roles =
            selectedTeam === "LoL"
                ? ["Top Laner", "Jungler", "Mid Laner", "ADC", "Support"]
                : ["Controller", "Duelist", "Initiator", "Sentinel"];

        const playClubs = [
            "Another World Caserta",
            "Esplace Genova",
            "Gamever Napoli",
            "Hub Voghera",
            "Levelx55 Perugia",
            "Lobby E-Games Bari",
            "Parrot Sushi-Lan Roma",
            "PLB World Milano",
            "RedShift Gaming Messina",
            "Rift Esports Club Catanzaro",
            "Romagna Esports Club Cesena",
            "SpaceGames Salerno",
            "Spidibit Catania",
            "Titan Gaming Center Milano",
        ];

        return (
            <div className="filters-section d-flex flex-column">
                <FilterInputField
                    placeholder={"Cerca un nome"}
                    value={""}
                    title={"Nome"}
                />

                {/*<DoubleSlider
                    minValue={minValue}
                    maxValue={maxValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                    title="Prezzo"
                />*/}

                <h3>Filtro Ruolo</h3>
                <ButtonGrid labels={roles} onSelect={() => {}} />

                <h3>Filtro Squadra</h3>
                <ButtonGrid labels={playClubs} onSelect={() => {}} />
            </div>
        );
    };

export default Filters;
