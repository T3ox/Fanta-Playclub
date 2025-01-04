import { useUser } from "../../../utils/context/User";
import CircleAddButton from "../../atoms/CircleAddButton/CircleAddButton";
import "./styles.scss";
import Props from "./types";

const EmptyPlayerCard: React.FC<Props> = ({ playerId }) => {
    const { addPlayerShowModal } = useUser();
    return (
        <div className="player-card d-flex align-items-center justify-content-center">
            <CircleAddButton handleClick={() => addPlayerShowModal(playerId)} />
        </div>
    );
};

export default EmptyPlayerCard;
