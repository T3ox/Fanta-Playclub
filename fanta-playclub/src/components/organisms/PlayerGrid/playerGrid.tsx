import { useModal } from "../../../utils/context/FiltersModal";
import PlayerCard from "../../atoms/ModalPlayerCard/ModalPlayerCard";
import "./styles.scss";

const PlayersGrid = () => {
    const { filteredPlayers } = useModal();

    return (
        <div className="modal-player-grid-displayer d-flex justify-content-center align-items-center flex-wrap p-3 container">
            <div className="row justify-content-start">
            {filteredPlayers.length > 0 &&
                filteredPlayers.map((player) => (
                    <div className="col-6 col-xxl-4 p-2">
                        <PlayerCard key={player.iD} player={player} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayersGrid;
