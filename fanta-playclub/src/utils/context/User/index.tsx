import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { userMock } from "../../LocalDB/userMock";
import Props from "../types";
import UserContext from "./types";

// Crei un context per racchiudere i dati condivisi
const Context = createContext<UserContext>({
    selectedTeam: "",
    changeSelectedTeam: () => {},
    addPlayerShowModal: () => {},
    showPlayerModal: false,
});

// Crei un provider per condividere il context
export const UserProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre
    const [selectedTeam, setSelectedTeam] = useState("LoL");
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    // Metodo per cambiare il team selezionato
    const changeSelectedTeam = () => {
        setSelectedTeam((prevTeam) =>
            prevTeam === "LoL" ? "Valorant" : "LoL",
        );
    };

    const addPlayerShowModal = useCallback((iD: number) => {
        setShowPlayerModal((prev) => !prev);
        if (iD !== -1) {
            userMock.players.lol[iD - 1] = {
                ...userMock.players.lol[iD - 1],
                riotID: "Franco", // Cambia i dettagli desiderati
            };
            console.log("Player aggiornato:", userMock.players.lol);
        }
    }, []);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: UserContext = {
            selectedTeam,
            changeSelectedTeam,
            addPlayerShowModal,
            showPlayerModal,
        };
        return value;
    }, [selectedTeam]);

    // Ritorni il Provider del context
    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): UserContext => useContext(Context);
