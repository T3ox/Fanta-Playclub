import { useState } from "react";
import CustomInputField from "../../atoms/CustomInputField/CustomInputField";
import FilterGrid from "../../molecules/FilterGrid/FilterGrid";
import "./styles.scss";
import FilterSection from "../../molecules/FilterSection/FilterSection";

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

const FiltersBar = () =>
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
                ? ["Top Laner", "Jungler", "Mid Laner", "AD Carry", "Support"]
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
            <div className="filters-bar d-flex flex-column">
                <FilterSection
                    label="Nome"
                    children={
                        <CustomInputField placeholder={"Cerca un nome"} />
                    }
                />

                {/*<DoubleSlider
                    minValue={minValue}
                    maxValue={maxValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                    title="Prezzo"
                />*/}

                <FilterSection
                    label="Filtro Ruolo"
                    children={<FilterGrid type="role" labels={roles} />}
                />

                <FilterSection
                    label="Filtro Squadra"
                    children={<FilterGrid type="team" labels={playClubs} />}
                />
            </div>
        );
    };

export default FiltersBar;
