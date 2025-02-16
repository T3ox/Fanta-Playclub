import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { roleImages } from "../../LocalDB/roleImages";
import { Player, userMock } from "../../LocalDB/userMock";
import Props from "../types";
import UserContext from "./types";

// Crei un context per racchiudere i dati condivisi
const Context = createContext<UserContext>({
    selectedTeam: "",
    changeSelectedTeam: () => {},
    addPlayerShowModal: () => {},
    openModal: () => {},
    closeModal: () => {},
    showPlayerModal: false,
    team: [],
    teamCost: 0,
});

// Crei un provider per condividere il context
export const UserProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre
    const [selectedTeam, setSelectedTeam] = useState("LoL");
    const [showPlayerModal, setShowPlayerModal] = useState(true);
    const [teamCost, setTeamCost] = useState<number>(0);
    const [clickedItem, setClickedItem] = useState(0);

    // TODO DA CAMBIARE QUANDO SI AGGIUNGE UN VERO DB
    // Mock dei Player
    const [team, setTeam] = useState<Player[]>(userMock.players.lol);

    useEffect(() => {
        let sum = 0;
        team.map((player) => {
            sum += player.cost;
        });

        setTeamCost(sum);

        // roles images pre-load
        roleImages.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }, [team]);

    useEffect(() => {
        console.log("Il valore di teamCost è cambiato:", teamCost);
    }, [teamCost]);

    // Metodo per cambiare il team selezionato
    const changeSelectedTeam = useCallback(() => {
        setSelectedTeam((prevTeam) => {
            if (prevTeam === "LoL") {
                userMock.players.lol = team;
                setTeam(userMock.players.valorant);
                return "Valorant";
            } else {
                userMock.players.valorant = team;
                setTeam(userMock.players.lol);
                return "LoL";
            }
        });
    }, []);

    const addPlayerShowModal = useCallback(
        (player: Player) => {
            setTeam((prevPlayers) => {
                const updatedPlayers = [...prevPlayers];

                updatedPlayers[clickedItem] = {
                    ...updatedPlayers[clickedItem],
                    riotID: player.riotID,
                    team: player.team,
                    cost: player.cost,
                    role: player.role,
                };
                return updatedPlayers;
            });
        },
        [clickedItem],
    );

    const openModal = useCallback((id: number) => {
        setClickedItem(id);
        setShowPlayerModal(true);
    }, []);

    const closeModal = useCallback(() => {
        setShowPlayerModal(false);
    }, []);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: UserContext = {
            selectedTeam,
            changeSelectedTeam,
            addPlayerShowModal,
            showPlayerModal,
            team,
            teamCost,
            openModal,
            closeModal,
        };
        return value;
    }, [selectedTeam, showPlayerModal, team, teamCost]);

    // Ritorni il Provider del context
    return <Context.Provider value={MemorizedValue}>{children}</Context.Provider>;
};

export const useUser = (): UserContext => useContext(Context);
