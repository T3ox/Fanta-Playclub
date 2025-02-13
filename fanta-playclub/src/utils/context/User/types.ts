import { Player } from "../../LocalDB/userMock";

export default interface UserContext {
    selectedTeam: string;
    changeSelectedTeam: () => void;
    addPlayerShowModal: (player: Player) => void;
    openModal: (iD: number) => void;
    closeModal: () => void;
    showPlayerModal: boolean;
    team: Player[];
    teamCost: number;
}
