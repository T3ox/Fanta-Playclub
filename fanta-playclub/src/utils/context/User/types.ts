export default interface UserContext {
    selectedTeam: string;
    changeSelectedTeam: () => void;
    addPlayerShowModal: (iD: number) => void;
    showPlayerModal: boolean;
}
