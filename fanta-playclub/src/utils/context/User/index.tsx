import { createContext, useContext, useMemo, useState } from "react";
import Props from "../types";
import UserContext from "./types";

// Crei un context per racchiudere i dati condivisi
const Context = createContext<UserContext>({
    selectedTeam: "",
    changeSelectedTeam: () => {},
});

// Crei un provider per condividere il context
export const UserProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre
    const [selectedTeam, setSelectedTeam] = useState("LoL");
    const [isAddPlayerModelOpen, setIsAddPlayerModelOpen] = useState(false);

    // Metodo per cambiare il team selezionato
    const changeSelectedTeam = () => {
        setSelectedTeam((prevTeam) =>
            prevTeam === "LoL" ? "Valorant" : "LoL",
        );
    };

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: UserContext = {
            selectedTeam,
            changeSelectedTeam,
        };
        return value;
    }, [selectedTeam]);

    // Ritorni il Provider del context
    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): UserContext => useContext(Context);
