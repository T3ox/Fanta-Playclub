import "./styles.scss";
import Props from "./types";

const EmptyPlayerCard: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className="player-card d-flex align-items-center justify-content-center">
            <button onClick={handleClick} className="circle-button-wrapper">
                <div className="circle-button btn d-flex justify-content-center align-items-center"></div>
            </button>
        </div>
    );
};

export default EmptyPlayerCard;
