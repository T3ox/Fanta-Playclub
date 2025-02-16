import { useModal } from "../../../utils/context/FiltersModal";
import PlayerCard from "../../atoms/ModalPlayerCard/ModalPlayerCard";
import "./styles.scss";

const PlayersGrid = () => {
    const { filteredPlayers } = useModal();

    return (
        <div className="modal-player-grid-displayer d-flex flex-wrap p-3">
            {filteredPlayers.length > 0 &&
                filteredPlayers.map((player) => (
                    <PlayerCard key={player.iD} player={player} />
                ))}
        </div>
    );
};

export default PlayersGrid;
