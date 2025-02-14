import React, { useState } from "react";
import { useModal } from "../../../utils/context/FiltersModal";
import GridButton from "../../atoms/GridButton/GridButton";
import "./styles.scss";
import Props from "./types";

const FilterGrid: React.FC<Props> = ({ labels, type }) => {
    const { roleFilter, teamFilter, updateRoles, updateTeams } = useModal();
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (label: string) => {
        let updatedRole = [...roleFilter];
        let updatedTeams = [...teamFilter];

        const isRoleFilter = type === "role";
        const isTeamFilter = type === "team";

        if (!isRoleFilter && !isTeamFilter) return;

        // Se è un filtro per il ruolo
        if (isRoleFilter) {
            updateFilters(roleFilter, updateRoles, label);
        }

        // Se è un filtro per il team
        if (isTeamFilter) {
            updateFilters(teamFilter, updateTeams, label);
        }

        setActiveButton(
            updatedRole.includes(label) || updatedTeams.includes(label) ? label : null,
        );
    };

    // Funzione per aggiornare i filtri
    const updateFilters = (
        currentFilter: string[],
        updateFilter: (filter: string[]) => void,
        label: string,
    ) => {
        const updatedFilter = currentFilter.includes(label)
            ? currentFilter.filter((item) => item !== label)
            : [...currentFilter, label];
        updateFilter(updatedFilter);
    };

    return (
        <div className="d-flex flex-wrap">
            {labels.map((label, key) => (
                <div className="m-1" key={key}>
                    <GridButton
                        label={label}
                        onClick={() => handleButtonClick(label)}
                        isActive={
                            type === "role"
                                ? roleFilter.includes(label)
                                : teamFilter.includes(label)
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterGrid;
