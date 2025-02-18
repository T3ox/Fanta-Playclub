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
import { useUser } from "../User";
import FilterContext from "./types";
import getPlayers from "../../../API/getPlayers";

// Funzione per eseguire il filtro sui giocatori
const filterPlayers = (
    players: Player[],
    search: string,
    minValue: number,
    maxValue: number,
    roles: string[],
    teams: string[],
    teamCost: number,
): Player[] => {
    return players.filter(
        ({ riotID, cost, role, team }) =>
            riotID.toLowerCase().includes(search.toLowerCase()) &&
            cost >= minValue &&
            cost <= maxValue &&
            (roles.length === 0 || roles.includes(role)) &&
            (teams.length === 0 || teams.includes(team)) &&
            cost + teamCost <= 15,
    )
    .sort((a, b) => a.riotID.localeCompare(b.riotID));
};
// Context per racchiudere i dati condivisi
const Context = createContext<FilterContext>({
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
    const { teamCost, selectedTeam } = useUser();
    const COSTSFILTERS = { min: 1, max: 5 };
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
    const [search, setSearch] = useState("");
    const [minValue, setMinValue] = useState(COSTSFILTERS.min);
    const [maxValue, setMaxValue] = useState(COSTSFILTERS.max);
    const [roleFilter, setRoleFilter] = useState<string[]>([]);
    const [teamFilter, setTeamFilter] = useState<string[]>([]);

    useEffect(() => {
        setFilteredPlayers(selectedTeam === "LoL" ? players.lol : players.valorant);
    }, [selectedTeam]);

    useEffect(()=> {
        const fetchPlayers = async () => {
            const data: Player[] = await getPlayers()
            setAllPlayers(data)
        }

        fetchPlayers();

    }, []) 


    // Funzione per aggiornare i giocatori filtrati
    const updatePlayers = useCallback(() => {
        setFilteredPlayers(
            filterPlayers(
                allPlayers,
                search,
                minValue,
                maxValue,
                roleFilter,
                teamFilter,
                teamCost,
            ),
        );
    }, [allPlayers, search, minValue, maxValue, roleFilter, teamFilter, teamCost]);

    // Esegui il filtro ogni volta che cambiano i filtri
    useEffect(() => {
        updatePlayers();
    }, [updatePlayers]);

    const updateRoles = useCallback((roles: string[]) => setRoleFilter(roles), []);
    const updateTeams = useCallback((teams: string[]) => setTeamFilter(teams), []);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: FilterContext = {
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
        setAllPlayers,
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
