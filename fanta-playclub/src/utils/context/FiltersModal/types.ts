import { Player } from "../../LocalDB/userMock";

export default interface FilterContext {
    filteredPlayers: Player[];
    search: string;
    setSearch: (value: string) => void;
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    roleFilter: string[];
    updateRoles: (role: string[]) => void;
    teamFilter: string[];
    updateTeams: (team: string[]) => void;
}
