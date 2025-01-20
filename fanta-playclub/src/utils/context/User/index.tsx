import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { Player, userMock } from "../../LocalDB/userMock";
import Props from "../types";
import UserContext from "./types";

// Crei un context per racchiudere i dati condivisi
const Context = createContext<UserContext>({
    selectedTeam: "",
    changeSelectedTeam: () => {},
    addPlayerShowModal: () => {},
    showPlayerModal: false,
    players: [],
    teamCost: 0,
});

// Crei un provider per condividere il context
export const UserProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre
    const [selectedTeam, setSelectedTeam] = useState("LoL");
    const [showPlayerModal, setShowPlayerModal] = useState(false);
    const [teamCost, setTeamCost] = useState<number>(0);

    // TODO DA CAMBIARE QUANDO SI AGGIUNGE UN VERO DB
    // Mock dei Player
    const [players, setPlayers] = useState<Player[]>(userMock.players.lol);

    useEffect(() => {
        let sum = 0;
        players.map((player) => {
            sum += player.cost;
        });

        setTeamCost(sum);
    }, [players]);

    // Metodo per cambiare il team selezionato
    const changeSelectedTeam = () => {
        setSelectedTeam((prevTeam) => {
            if (prevTeam === "LoL") {
                userMock.players.lol = players;
                setPlayers(userMock.players.valorant);
                return "Valorant";
            } else {
                userMock.players.valorant = players;
                setPlayers(userMock.players.lol);
                return "LoL";
            }
        });
    };

    const addPlayerShowModal = useCallback((iD: number) => {
        setShowPlayerModal((prev) => !prev);

        setPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[iD - 1] = {
                ...updatedPlayers[iD - 1],
                riotID: "Teo#alone",
                team: "Hub Voghera",
                cost: 1,
                role: "top laner",
            };
            return updatedPlayers;
        });
    }, []);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: UserContext = {
            selectedTeam,
            changeSelectedTeam,
            addPlayerShowModal,
            showPlayerModal,
            players,
            teamCost,
        };
        return value;
    }, [selectedTeam, showPlayerModal, players, teamCost]);

    // Ritorni il Provider del context
    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): UserContext => useContext(Context);
