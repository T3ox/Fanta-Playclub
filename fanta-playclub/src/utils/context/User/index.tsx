import {
    createContext,
    useCallback,
    useContext,
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
    players: [
        {
            iD: 0,
            riotID: "",
            image: "",
            cost: 0,
        },
    ],
});

// Crei un provider per condividere il context
export const UserProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre
    const [selectedTeam, setSelectedTeam] = useState("LoL");
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    // Mock dei Player
    const [players, setPlayers] = useState<Player[]>(userMock.players.lol);

    // Metodo per cambiare il team selezionato
    const changeSelectedTeam = () => {
        setSelectedTeam((prevTeam) =>
            prevTeam === "LoL" ? "Valorant" : "LoL",
        );
    };

    const addPlayerShowModal = useCallback((iD: number) => {
        setShowPlayerModal((prev) => !prev);

        setPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[iD - 1] = {
                ...updatedPlayers[iD - 1],
                riotID: "Franco",
                cost: 2,
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
        };
        return value;
    }, [selectedTeam, showPlayerModal, players]);

    // Ritorni il Provider del context
    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): UserContext => useContext(Context);
