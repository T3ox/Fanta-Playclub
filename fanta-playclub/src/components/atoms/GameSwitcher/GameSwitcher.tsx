import { useUser } from "../../../utils/context/User";
import "./style.scss";

const GameSwitcher = () => {
    const { changeSelectedTeam } = useUser();

    return (
        <div className="game-switcher">
            <label className="switch">
                <input type="checkbox" onClick={changeSelectedTeam} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default GameSwitcher;
