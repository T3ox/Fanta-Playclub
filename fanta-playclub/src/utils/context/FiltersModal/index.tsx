import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { players } from "../../LocalDB/playerMock";
import { Player } from "../../LocalDB/userMock";
import Props from "../types";
import FilterContext from "./types";

// Funzione per eseguire il filtro sui giocatori
const filterPlayers = (
    players: Player[],
    search: string,
    minValue: number,
    maxValue: number,
    roles: string[],
    teams: string[],
): Player[] => 
    players.filter(({ riotID, cost, role, team }) =>
        riotID.toLowerCase().includes(search.toLowerCase()) &&
        cost >= minValue && cost <= maxValue &&
        (roles.length === 0 || roles.includes(role)) &&
        (teams.length === 0 || teams.includes(team))
    );

// Context per racchiudere i dati condivisi
const Context = createContext<FilterContext>({
    allPlayers: [],
    filteredPlayers: [],
    search: "",
    setSearch: () => {},
    minValue: 0,
    maxValue: 0,
    setMinValue: () => {},
    setMaxValue: () => {},
    roleFilter: [],
    updateRoles: () => {},
    teamFilter: [],
    updateTeams: () => {},
});

// Crei un provider per condividere il context
export const FilterProvider = ({ children }: Props) => {
    const COSTSFILTERS = { min: 1, max: 5 };
    const [allPlayers] = useState<Player[]>(players.lol);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players.lol);
    const [search, setSearch] = useState("");
    const [minValue, setMinValue] = useState(COSTSFILTERS.min);
    const [maxValue, setMaxValue] = useState(COSTSFILTERS.max);
    const [roleFilter, setRoleFilter] = useState<string[]>([]);
    const [teamFilter, setTeamFilter] = useState<string[]>([]);

    // Funzione per aggiornare i giocatori filtrati
    const updatePlayers = useCallback(() => {
        setFilteredPlayers(filterPlayers(
            allPlayers,
            search,
            minValue,
            maxValue,
            roleFilter,
            teamFilter,
        ));
    }, [allPlayers, search, minValue, maxValue, roleFilter, teamFilter]);

    // Esegui il filtro ogni volta che cambiano i filtri
    useEffect(() => {
        updatePlayers();
    }, [updatePlayers]);

    const updateRoles = useCallback((roles: string[]) => setRoleFilter(roles), []);
    const updateTeams = useCallback((teams: string[]) => setTeamFilter(teams), []);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: FilterContext = {
            allPlayers,
            filteredPlayers,
            search,
            setSearch,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
            roleFilter,
            updateRoles,
            teamFilter,
            updateTeams,
        };
        return value;
    }, [
        allPlayers,
        filteredPlayers,
        maxValue,
        minValue,
        roleFilter,
        search,
        teamFilter,
        updateRoles,
        updateTeams,
    ]);

    // Ritorni il Provider del context
    return <Context.Provider value={MemorizedValue}>{children}</Context.Provider>;
};

export const useModal = (): FilterContext => useContext(Context);
