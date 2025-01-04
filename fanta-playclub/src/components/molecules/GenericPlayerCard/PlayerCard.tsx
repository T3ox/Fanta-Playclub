import CircleAddButton from "../../atoms/CircleAddButton/CircleAddButton";
import "./styles.scss";
import Props from "./types";

const GenericPlayerCard: React.FC<Props> = ({ handle }) => {
    return (
        <div className="player-card d-flex align-items-center justify-content-center">
            <CircleAddButton handleClick={handle} />
        </div>
    );
};

export default GenericPlayerCard;
