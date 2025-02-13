import { Player } from "../../LocalDB/userMock";

export default interface UserContext {
    selectedTeam: string;
    changeSelectedTeam: () => void;
    addPlayerShowModal: (iD: number) => void;
    showPlayerModal: boolean;
    players: Player[];
    teamCost: number;
}
