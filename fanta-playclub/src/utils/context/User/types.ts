import { Player } from "../../LocalDB/userMock";

export default interface UserContext {
    selectedGame: string;
    changeSelectedGame: () => void;
    addPlayerShowModal: (player: Player) => void;
    openModal: (iD: number) => void;
    closeModal: () => void;
    showPlayerModal: boolean;
    team: Player[];
    teamCost: number;
}
