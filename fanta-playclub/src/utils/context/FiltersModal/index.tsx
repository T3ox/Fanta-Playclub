import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import Props from "../types";
import FilterContext from "./types";
import { Player, players } from "../../LocalDB/playerMock";

// Funzione per eseguire il filtro sui giocatori
const filterPlayers = (
    players: Player[],
    search: string,
    minValue: number,
    maxValue: number,
    roleFilter: string[],
    teamFilter: string[]
): Player[] => {
    return players.filter((player) => {
        const isMatchingSearch = player.riotID
            .toLowerCase()
            .includes(search.toLowerCase());
        const isWithinCostRange = player.cost >= minValue && player.cost <= maxValue;
        const isMatchingRole =
            roleFilter.length === 0 || roleFilter.includes(player.role);
        const isMatchingTeam =
            teamFilter.length === 0 || teamFilter.includes(player.team);

        return isMatchingSearch && isWithinCostRange && isMatchingRole && isMatchingTeam;
    });
};

// Crei un context per racchiudere i dati condivisi
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
    const FILTERSVALUES = {
        minimumCost: 1,
        maximumCost: 5,
    };

    const [allPlayers] = useState<Player[]>(players.lol);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players.lol);
    const [search, setSearch] = useState("");
    const [minValue, setMinValue] = useState(FILTERSVALUES.minimumCost);
    const [maxValue, setMaxValue] = useState(FILTERSVALUES.maximumCost);
    const [roleFilter, setRoleFilter] = useState<string[]>([]);
    const [teamFilter, setTeamFilter] = useState<string[]>([]);

    // Funzione per aggiornare i giocatori filtrati
    const updatePlayers = useCallback(() => {
        const filtered = filterPlayers(
            allPlayers,
            search,
            minValue,
            maxValue,
            roleFilter,
            teamFilter
        );
        setFilteredPlayers(filtered);

        /*const filtered = allPlayers.filter(
            (player) =>
                player.riotID.toLowerCase().includes(search.toLowerCase()) &&
                player.cost >= minValue &&
                player.cost <= maxValue
            //&&
            //(!roleFilter || player.role === roleFilter) &&
            //(!teamFilter || player.team === teamFilter)
        );*/
    }, [allPlayers, search, minValue, maxValue, roleFilter, teamFilter]);

    // Esegui il filtro ogni volta che cambiano i filtri
    useEffect(() => {
        updatePlayers();
    }, [updatePlayers]);

    const updateRoles = useCallback((role: string[]) => {
        setRoleFilter(role);
    }, []);
    const updateTeams = useCallback((team: string[]) => {
        setTeamFilter(team);
    }, []);

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
