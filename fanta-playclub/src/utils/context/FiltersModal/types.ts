export default interface FilterContext {
    search: string;
    setSearch: (value: string) => void;
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    roleFilter: string | null;
    //setRoleFilter: (role: string | null) => void;
    teamFilter: string | null;
    //setTeamFilter: (team: string | null) => void;
}
